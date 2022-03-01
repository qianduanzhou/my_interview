#include <stdio.h>

struct note
{
    int x; //横坐标
    int y; //纵坐标
    int f; //父亲在队列中的编号
    int s; //步数
};

void main()
{
    struct note que[2501];
    int a[51][51] = {0}, book[51][51] = {0};
    int next[4][2] = {{0, 1}, {1, 0}, {0, -1}, {-1, 0}};
    int head, tail;
    int i, j, k, n, m, startx, starty, p, q, tx, ty, flag;
    scanf("%d %d", &n, &m);
    for (i = 1; i <= n; i++)
        for (j = 1; j <= m; j++)
            scanf("%d", &a[i][j]);
    scanf("%d %d %d %d", &startx, &starty, &p, &q);
    //队列初始化
    head = 1;
    tail = 1;
    //队列插入入口坐标
    que[tail].x = startx;
    que[tail].y = starty;
    que[tail].f = 0;
    que[tail].s = 0;
    tail++;
    book[startx][starty] = 1;
    flag = 0; //标志是否找到终点
    while (head < tail)
    {
        //枚举4个方向
        for (k = 0; k <= 3; k++)
        {
            //计算下一个点的坐标
            tx = que[head].x + next[k][0];
            ty = que[head].y + next[k][1];
            if (tx < 1 || tx > n || ty < 1 || ty > m)
                continue;
            //判断是否是障碍物或者已经在路径中
            if (a[tx][ty] == 0 && book[tx][ty] == 0)
            {
                book[tx][ty] = 1; //标记点,广度遍历无须还原标记，和深度不同
                que[tail].x = tx;
                que[tail].y = ty;
                que[tail].f = head;
                que[tail].s = que[head].s + 1; //步数是父亲的步数 + 1
                tail++;
            }
            //达到目的
            if (tx == p && tx == q)
            {
                flag = 1;
                break;
            }
        }
        if (flag == 1)
            break;
        head++;//继续下一个节点
    }
    printf("%d", que[tail - 1].s);
}