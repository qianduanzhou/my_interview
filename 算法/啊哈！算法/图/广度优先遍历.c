#include <stdio.h>

void main()
{
    int i,j,n,m,a,b,cur,book[101] = {0},e[101][101];
    int que[10001],head,tail;
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

    //队列初始化
    head = 1;
    tail = 1;
    //从1号顶点出发，加入队列
    que[head] = 1;
    tail ++;
    book[1] = 1;
    //当队列不为空时循环
    while(head < tail)
    {
        cur = que[head];//当前正在访问的顶点编号
        for(i = 1; i <= n; i ++) {
            if(e[cur][i] == 1 && book[i] == 0)//判断是否有边
            {
                que[tail] = i;
                tail ++;
                book[i] = 1;
            }
            if(tail > n) {//当所有点遍历完，跳出循环
                break;
            }
        }
        head ++;
    }
    for(i = 1; i < tail; i ++)
    {
        printf("%d", que[i]);
    }
}