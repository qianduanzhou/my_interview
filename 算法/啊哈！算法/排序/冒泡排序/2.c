#include <stdio.h>

struct student
{
    char name[21];
    int score;
};
void main()
{

    struct student a[5] = {
        {"zhou",
         50},
        {"li",
         66},
        {"zhao",
         32},
        {"liu",
         89},
        {"huang",
         12},
    },
                   t;
    int i, j, n;
    n = sizeof(a) / sizeof(a[0]);

    for (i = 1; i <= n - 1; i++)
    {
        for (j = 0; j < n - i; j++)
        {
            if (a[j].score < a[j + 1].score)
            {
                t = a[j];
                a[j] = a[j + 1];
                a[j + 1] = t;
            }
        }
    }

    for (int i = 0; i <= n; i++)
    {
        printf("%s ", a[i].name);
    }
}