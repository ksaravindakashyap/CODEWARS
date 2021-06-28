// You will be given a 2D array of the maze and an array of 
// directions. Your task is to follow the directions given. If you reach the end point 
// before all your moves have gone, you should return Finish. If you hit any walls or go
//  outside the maze border, you should return Dead. If you find yourself still in the maze
//   after using all the moves,
//  you should return Lost.
// 0 = Safe place to walk
//       1 = Wall
//       2 = Start Point
//       3 = Finish Point


// 1. The Maze array will always be square i.e. N x N but its size and content will alter from test to test.

// 2. The start and finish positions will change for the final tests.

// 3. The directions array will always be in upper case and will be in the format of N = North, E = East, W = West and S = South.

// 4. If you reach the end point before all your moves have gone, you should return Finish.

// 5. If you hit any walls or go outside the maze border, you should return Dead.

// 6. If you find yourself still in the maze after using all the moves, you should return Lost.


    function mazeRunner(maze,directions) 
    {
        var l;
        var m ;
        console.log(maze.length);
        for(let i=0;i<(maze.length);i++)
        {
            for(let j=0;j<maze.length;j++)
            {
                if(maze[i][j] === 2)
                {
                    l =i;
                    m =j;
                    break;
                }
            }
        }
        for(let k=0;k<directions.length;k++)
        {
            console.log("entering");
            if(directions[k] === "N")
            {
                l-=1;
                console.log(l,m);
                if(maze[l][m] === 1)
                {
                        return "Dead"
                }else if(maze[l][m] === 3)
                {
                    return "Finish"
                }
                else
                console.log("N->");
                    console.log("IN NORTH CHECKING");
                    continue;
            }
            else if(directions[k] === "S")
            {
                l+=1;
                console.log(l,m);
                if(maze[l][m] === 1)
                {
                        return "Dead"
                }else if(maze[l][m] === 3)
                {
                    return "Finish"
                }
                else
                    console.log("S->");
                    console.log("IN SOUTH CHECKING");
                    continue;
            }
            else if(directions[k] === "E")
            {
                m+=1;
                console.log(l,m);
                if(maze[l][m] === 1)
                {
                    return "Dead"
                }else if(maze[l][m] === 3)
                {
                    return "Finish"
                }
                else
                    console.log('E->');
                    console.log("IN EAST CHCEKING");
                    continue;
            }
            else if(directions[k] === "W")
            {
                m-=1;
                console.log(l,m);
                if(maze[l][m] === 1)
                {
                        return "Dead"
                }else if(maze[l][m] === 3)
                {
                    return "Finish"
                }
                else
                    console.log("W->");
                    console.log("IN WEST CHECKING");
                    continue;
            }
            else {
                console.log("INVALID DIRECTION");
                return "Dead";
            }
        }
        if(maze[l][m] === 3)
        {
            return "FINISH"
        }
        else
        {
            return "LOST"
        }
    
    //    console.log(l,m);
    }


//OR


function mazeRunner(maze,directions) 
{

    var l;
    var m ;
    for(let i=0;i<(maze.length);i++)
    {
        for(let j=0;j<maze.length;j++)
        {
            if(maze[i][j] === 2)
            {
                l =i;
                m =j;
                break;
            }
        }
    }
    for(let k=0;k<directions.length;k++)
    {
        if(directions[k] === 'N')
        {
            l-=1;
        }
        if(directions[k] === 'S')
        {
            l+=1;           
        }
        if(directions[k] === 'E')
        {
            m+=1;
        }
        if(directions[k] === 'W')
        {
            m-=1;
        }
    if (maze[l]===undefined||maze[l][m]===undefined){return 'Dead'}
    if (maze[l][m]===0){continue}
    if (maze[l][m]===1){return 'Dead'}
    if (maze[l][m]===3){return 'Finish'}
}
  return 'Lost'
}






// maze = [[1,1,1,1,1,1,1],
//         [1,0,0,0,0,0,3],
//         [1,0,1,0,1,0,1],
//         [0,0,1,0,0,0,1],
//         [1,0,1,0,1,0,1],
//         [1,0,0,0,0,0,1],
//         [1,2,1,0,1,0,1]]

maze = [ 
[ 1, 1, 1, 1, 1, 1, 1 ],
[ 1, 0, 0, 0, 0, 0, 3 ],
[ 1, 0, 1, 0, 1, 0, 1 ],
[ 0, 0, 1, 0, 0, 0, 1 ],
[ 1, 0, 1, 0, 1, 0, 1 ],
[ 1, 0, 0, 0, 0, 0, 1 ],
[ 1, 2, 1, 0, 1, 0, 1 ] ]

directions = [ 'N', 'N', 'N', 'N', 'N', 'E', 'E', 'S', 'S', 'E', 'E', 'N', 'N', 'E' ]

let result = mazeRunner(maze,directions);
console.log(result);