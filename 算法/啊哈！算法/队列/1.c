#include <stdio.h>

struct queue
{
    int data[100];//队列的主体，用来存储内容
    int head;//队首
    int tail;//队尾
};
//从队头拿出两个数，删除第一个，第二个插入队尾，循环，求全部删除的数
void main() {
    struct queue q;
    int i;
    //初始化队列
    q.head = 0;
    q.tail = 0;
    for(i = 0; i < 5; i ++) {
        scanf("%d", &q.data[q.tail]);
        q.tail ++;
    }
    while (q.head < q.tail)
    {
        //打印队首并将队首出队
        printf("%d ",q.data[q.head]);
        q.head ++;
        //先将新队首的数添加到队尾
        q.data[q.tail] = q.data[q.head];
        q.tail ++;
        q.head ++;
    }
    
}
