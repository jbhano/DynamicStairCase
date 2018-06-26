Feature: Dynamic StairCase
As a builder
I want to build dynamic staircases 
So that my business is more agile


Scenario Outline: Calculate number of possible ways for Dynamic StairCase
    Given builder is building stair case having <numberOfStairs>
    Then business can use this staircase in <numberOfPaths> possible paths

Examples: StairCase
  | numberOfStairs  | numberOfPaths |
  | 0               | 0             |
  | 1               | 1             |
  | 2               | 2             |
  | 3               | 3             |
  | 4               | 5             |
  | 5               | 8             |
  | 6               | 13            |
  | 7               | 21            |
  | 8               | 34            |
  | 9               | 55            |
  | 10              | 89            |

  