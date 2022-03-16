#include <stdio.h>

int book[101], sum, n, e[101][101];
void dfs(int cur) //cur就是当前所在顶点的编号
{
    int i;
    printf("%d ", cur);
    sum++;
    if (sum == n)
        return; //所有顶点都访问过
    for (i = 1; i <= n; i++)
    {
        if (e[cur][i] == 1 && book[i] == 0)
        {
            book[i] = 1;
            dfs(i);
        }
    }
    return;
}

void main()
{
    int i, j, m, a, b;
    scanf("%d %d", &n, &m);
    //初始化二维矩阵
    for (i = 1; i <= n; i++)
        for (j = 1; j <= n; j++)
            if (i == j)
                e[i][j] = 0;
            else
                e[i][j] = 99999999; //假设为正无穷
    //读入顶点之间的边
    for (i = 1; i <= m; i++)
    {
        scanf("%d %d", &a, &b);
        e[a][b] = 1;
        e[b][a] = 1; //这里是无向图，所以也需要赋值为1
    }
    //从一号顶点出发
    book[1] = 1;
    dfs(1);
}