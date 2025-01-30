function maxPoints(grid: number[][], queries: number[]): number[] {
    let score:number[]=Array(queries.length).fill(0);
    queries.sort()
    const set=new Set()
    let k=[]
    
    

    return score;
};

//lets sort the queries, in the ascending order
//the pointer always starts at 0,0
//and it can move in all four directions, top, right, bottom, left
//we can perform dfs now, 

//abhi jispe bhi pointer hai usko pop kardo,
// points badha do
// aur uske non visited neighbours, jo bhi elements se kam hain unko queue me daal do

//but this method is slightly tedious because we have to perform the bfs for each query, there has to be a better approach
