#include <stdio.h>
int main()
{
    int a[5] = {2, 5, 8, 1, 100}, i, j, t;
    int n = sizeof(a) / sizeof(a[0]);
    for (int i = 1; i <= n - 1; i++)
    {
        for (int j = 0; j < n - i; j++)
        {
            if (a[j] < a[j + 1])
            {
                t = a[j];
                a[j] = a[j + 1];
                a[j + 1] = t;
            }
        }
    }
    for (int i = 0; i < n; i++)
    {
        printf("%d ", a[i]);
    }
    return 0;
}