# Checkers
_It's a classic!_

Students will work in groups of two to implement a Python-based version of the game of Checkers. They will use test-driven development to create the game, and pydocs to generate documentation for the program.

The user will be prompted for the names of the two players playing. Randomly select which player plays which color. The darker color always goes first.

Players will take turns by using a coordinate system to tell the program which piece they want to move, and then where they want to move it. The x-axis should use letters (A, B, C, etc) and the y-axis should use numbers (0, 1, 2, etc). An example move would be B4 to C5.

In addition to making a move, players may exit the game at anytime by entering 'exit'.

### Checker Rules & Facts
The game is played on a 8x8 chess board. Only the dark squares are used: the light squares are never used.

- There are two kinds of pieces: plain (single) pieces and "kings". A king is made by putting one plain piece on top of another.
- Each player starts with 12 pieces on the three rows closest to their own side. The row closest to each player is called the "King Row". The darker color moves first.
- A player can move in two ways. A piece can be moved forward, diagonally, to the very next dark square.
- If one player's piece, the other player's piece, and an empty square are lined up, then the first player may "jump" the other player's piece. In this case, the first player jumps over the other player's piece onto the empty square and takes the other player's piece off the board.
- A player can also use one piece to make multiple jumps in any one single turn, provided each jump continues to lead immediately into the next jump and in a straight line.
- If a player's piece moves into the King Row on the other player's side, it becomes a king. It can move forward and backward. (Regular pieces can only move forward.) A king cannot jump out of the King Row until the next turn.
- The first player to lose all of his or her pieces loses the game. If a player is put in a position where they cannot move, they lose.[3] If the players have the same amount of pieces, the player with the most kings wins. If the players have an equal number of pieces and the same number of kings the game is a draw.

#### Fun Bit
You can use unicode characters to make things that look like checkers! Google will help ya out ;)
