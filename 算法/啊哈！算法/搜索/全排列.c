#include <stdio.h>
/*
 * 全排列
 * 123全排列为123,132,213,231,312,321
 */
int a[10], book[10], n; //c语言全局变量默认初始化为0

void dfs(int step)
{
    int i;
    if (step == n + 1)//前n个已经排好
    {
        for (i = 1; i <= n; i++)
        {
            printf("%d", a[i]);//输出可行排列
        }
        printf("\n");
        return;
    }

    for (i = 1; i <= n; i++)
    {
        if (book[i] == 0)//当数字未使用
        {
            a[step] = i;//在数组中放入数字
            book[i] = 1;//当数字已使用
            dfs(step + 1);//递归调用
            book[i] = 0;//取回数字
        }
    }
    return;
}
void main()
{
    scanf("%d", &n);
    dfs(1);
}