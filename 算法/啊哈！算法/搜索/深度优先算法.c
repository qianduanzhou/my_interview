#include <stdio.h>
/**
 * 深度优先遍历
 * 二维数组确定终点步数
 */
int n, m, p, q, min = 99999;
int a[51][51], book[51][51];
void dfs(int x, int y, int step)
{
    int next[4][2] = {{0, 1}, {1, 0}, {0, -1}, {-1, 0}};//右下左上
    int tx, ty, k;
    if (x == p && y == q)//已找到
    {
        if (step < min)
        {
            min = step;
        }
        return;
    }
    for (k = 0; k <= 3; k++)//4个方向尝试
    {
        tx = x + next[k][0];
        ty = y + next[k][1];
        if (tx < 1 || tx > n || ty < 1 || ty > m)//边界情况
            continue;
        if (a[tx][ty] == 0 && book[tx][ty] == 0)//没有障碍且未走过的路
        {
            book[tx][ty] = 1;//标记走过的路
            dfs(tx, ty, step + 1);//递归继续走
            book[tx][ty] = 0;//取消标记
        }
    }
    return;
}
void main()
{
    int i, j, startx, starty;
    scanf("%d %d", &n, &m);
    for (i = 1; i <= n; i++)
        for (j = 1; j <= m; j++)
            scanf("%d", &a[i][j]);
    scanf("%d %d %d %d", &startx, &starty, &p, &q);
    book[startx][starty] = 1;
    dfs(startx, starty, 0);
    printf("%d", min);
}