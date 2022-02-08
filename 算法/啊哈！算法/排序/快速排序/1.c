#include <stdio.h>

int a[10] = {5, 10, 22, 2, 5, 6, 88, 77, 55, 3};
int n = sizeof(a) / sizeof(a[0]);
void quicksort(int left, int right)
{
    int i, j, t, temp;
    if (left > right)
        return;
    temp = a[left];
    i = left;
    j = right;
    while (i != j)
    {
        while (a[j] >= temp && i < j)
            j--;
        while (a[i] <= temp && i < j)
            i++;
        if (i < j) //将右边小于基准的数和左边大于基准的数进行替换
        {
            t = a[i];
            a[i] = a[j];
            a[j] = t;
        }

    }
    //将基准归位
    a[left] = a[i];
    a[i] = temp;
    //两边基准继续进行排序
    quicksort(left, i - 1);
    quicksort(j + 1, right);
}
void main()
{
    int i;
    quicksort(0, n - 1);
    for (i = 0; i < n; i++)
    {
        printf("%d ", a[i]);
    }
}