// phase-area-pavillion-floor-aisle-booth

export const phases = [
  {
    "id": 4,
    "name": "Phase 1",
    "start_date": "2024-04-15",
    "end_date": "2024-04-19",
    "startEnd": "15th to 19th April",
    "season": "Fall",
    "edition": 135,
    "year": 2024
  },
  {
    "id": 5,
    "name": "Phase 2",
    "start_date": "2024-04-23",
    "end_date": "2024-04-27",
    "startEnd": "23rd to 27th April",
    "season": "Fall",
    "edition": 135,
    "year": 2024
  },
  {
    "id": 6,
    "name": "Phase 3",
    "start_date": "2024-04-31",
    "end_date": "2024-05-04",
    "startEnd": "31st to 4th May",
    "season": "Fall",
    "edition": 135,
    "year": 2024
  },
  {
    "id": 4,
    "slug": "phase1",
    "name": "Phase 1",
    "start_date": "2024-10-15",
    "end_date": "2024-10-19",
    "startEnd": "15th to 19th October",
    "season": "Fall",
    "edition": 136,
    "year": 2024
  },
  {
    "id": 5,
    "slug": "phase2",
    "name": "Phase 2",
    "start_date": "2024-10-23",
    "end_date": "2024-10-27",
    "startEnd": "23rd to 27th October",
    "season": "Fall",
    "edition": 136,
    "year": 2024
  },
  {
    "id": 6,
    "slug": "phase3",
    "name": "Phase 3",
    "start_date": "2024-10-31",
    "end_date": "2024-11-04",
    "startEnd": "31st to 4th November",
    "season": "Fall",
    "edition": 136,
    "year": 2024
  },
]

export const areas = [
  {
    "area": "A",
    "color": "#3d7dbd",
    "halls": [
      { "id": 1, "hall": 1, "floors": ["1", "Y", "2"] },
      { "id": 2, "hall": 2, "floors": ["1", "Y", "2"] },
      { "id": 3, "hall": 3, "floors": ["1", "Y", "2"] },
      { "id": 4, "hall": 4, "floors": ["0", "1", "Y", "2"] },
      { "id": 5, "hall": 5, "floors": ["1", "Y", "2"] },
      { "id": 6, "hall": 6, "floors": ["0", "1",] },
      { "id": 7, "hall": 7, "floors": ["1",] },
      { "id": 8, "hall": 8, "floors": ["0", "1",] }
    ]
  },
  {
    "area": "B",
    "color": "#e2a92e",
    "halls": [
      { "id": 9, "hall": 9, "floors": ["0", "1", "2", "3"] },
      { "id": 10, "hall": 10, "floors": ["1", "2", "3"] },
      { "id": 11, "hall": 11, "floors": ["1", "2", "3"] },
      { "id": 12, "hall": 12, "floors": ["0", "1", "2"] },
      { "id": 13, "hall": 13, "floors": ["0", "1", "2"] }
    ]
  },
  {
    "area": "C",
    "color": "#a0bd49",
    "halls": [
      { "id": 14, "hall": 14, "floors": ["1", "2", "3", "4"] },
      { "id": 15, "hall": 15, "floors": ["1", "2", "3", "4"] },
      { "id": 16, "hall": 16, "floors": ["1", "2", "3"] }
    ]
  },
  {
    "area": "D",
    "color": "#be2781",
    "halls": [
      { "id": 17, "hall": 17, "floors": ["1", "2"] },
      { "id": 18, "hall": 18, "floors": ["1", "2"] },
      { "id": 19, "hall": 19, "floors": ["1", "2"] },
      { "id": 20, "hall": 20, "floors": ["1", "2"] }
    ]
  }
]

export const ailes = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
]

export const booths = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48]

type CategoryPhases = {
  [key: string]: {
    [key: string]: string;
  };
};

export const categories:CategoryPhases = {
  "Phase 1": {
    "A": "Electronics & Appliance",
    "B": "Manufacturing",
    "C": "Vehicles & Two Wheels",
    "D": "Light & Electrical"
  },
  "Phase 2": {
    "A": "Hardware & Tools",
    "B": "Housewares",
    "C": "Gifts & Decorations",
    "D": "Building & Furniture"
  },
  "Phase 3": {
    "A": "Toys & Children Baby and Maternity",
    "B": "Fashion",
    "C": "Home Textiles",
    "D": "Stationery"
  }
}
