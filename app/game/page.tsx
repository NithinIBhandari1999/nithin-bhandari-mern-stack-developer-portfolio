"use client";
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const GRID_SIZE = 4;
const CELL_COUNT = GRID_SIZE * GRID_SIZE;

interface Tile {
  value: number;
  position: number;
}

const SlidingPuzzle: React.FC = () => {
  const [tiles, setTiles] = useState<Tile[]>([]);
  const [isWon, setIsWon] = useState<boolean>(false);
  const [time, setTime] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    initializeGame();
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isActive && !isWon) {
      interval = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    } else if (interval) {
      clearInterval(interval);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, isWon]);

  const initializeGame = (): void => {
    const newTiles: Tile[] = Array.from({ length: CELL_COUNT }, (_, index) => ({
      value: index,
      position: index
    }));
    shuffleTiles(newTiles);
    setTiles(newTiles);
    setIsWon(false);
    setTime(0);
    setIsActive(true);
  };

  const shuffleTiles = (tilesArray: Tile[]): void => {
    for (let i = tilesArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [tilesArray[i], tilesArray[j]] = [tilesArray[j], tilesArray[i]];
      tilesArray[i].position = i;
      tilesArray[j].position = j;
    }
  };

  const moveTile = (index: number): void => {
    const emptyIndex = tiles.findIndex(tile => tile.value === 0);
    if (!isAdjacent(index, emptyIndex)) return;

    const newTiles = [...tiles];
    [newTiles[index], newTiles[emptyIndex]] = [newTiles[emptyIndex], newTiles[index]];
    newTiles[index].position = index;
    newTiles[emptyIndex].position = emptyIndex;

    setTiles(newTiles);
    checkWinCondition(newTiles);
  };

  const isAdjacent = (index1: number, index2: number): boolean => {
    const row1 = Math.floor(index1 / GRID_SIZE);
    const col1 = index1 % GRID_SIZE;
    const row2 = Math.floor(index2 / GRID_SIZE);
    const col2 = index2 % GRID_SIZE;
    return Math.abs(row1 - row2) + Math.abs(col1 - col2) === 1;
  };

  const checkWinCondition = (currentTiles: Tile[]): void => {
    const hasWon = currentTiles.every((tile, index) => 
      tile.value === 0 || tile.value === index + 1
    );
    if (hasWon) {
      setIsWon(true);
      setIsActive(false);
    }
  };

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Sliding Puzzle</h1>
      <div className="text-2xl mb-4">Time: {formatTime(time)}</div>
      <div className="grid grid-cols-4 gap-2 bg-white p-4 rounded-lg shadow-lg mb-4">
        {tiles.map((tile, index) => (
          <Button
            key={tile.value}
            onClick={() => moveTile(index)}
            className={`w-16 h-16 text-2xl font-bold ${
              tile.value === 0 ? 'invisible' : ''
            }`}
            disabled={isWon}
          >
            {tile.value !== 0 ? tile.value : ''}
          </Button>
        ))}
      </div>
      {isWon && (
        <div className="mt-4 text-2xl font-bold text-green-600">
          Congratulations! You solved the puzzle in {formatTime(time)}!
        </div>
      )}
      <Button onClick={initializeGame} className="mt-4">
        New Game
      </Button>
    </div>
  );
};

export default SlidingPuzzle;