Sorting in Javascript
---------------------

## bubble sorting
先确定遍历，两次遍历，一次遍历只能拿到一个最大/最小值。比较符合想象的是从数组的最后开始往前冒。外层遍历控制里层遍历的次数。里层遍历的职责是通过两辆相邻的元素的比较和交换，来拿到最大/最小值。冒到最前面的不需要出现在下一次的遍历中。由于有a[j-1]所以j不能等于0。

## insertion sorting
先确定遍历，也是要遍历两次，外层遍历控制里层遍历的次数，同时还要拿到比较的基准值。里层遍历从该基准值的前一个开始遍历，知道数组的最前的值。由于基准值的前面的值都是排好序的，所以里层遍历的目标是通过大小比较，找到一个index。找到之后要将基准值放在这个index的位置。对于数组，所谓的插入就是指插入位置的后面的元素都往后挪一位，这个过程会覆盖基准值。覆盖也没有关系，因为基准值在外层循环的时候被保存在了一个局部变量里面。挪出位置来之后，再将那个局部变量插入index的位置就可以了。
在面对循环的时候，我们需要确定三个条件，循环的初始值，循环的跳出条件，循环的增量。
* 由于内存循环j的初始值为j = i - 1，所以意味着j肯定可以为0
* 循环跳出条件里j >= 0，如果是因为不满足这条跳出的，那么此时j的值为-1，这导致跳出之后需要使用a[j+1]而不能使用a[j]

## selection sorting
外层循环控制次数以及循环开始的位置，内层循环找子序列中的最小值或者最大值。内层循环遍历完一次之后，将找到的最小/最大值与第一个值交换。这个的前提是刚进入第一层循环的时候第一个值被作为最小/最大值，然后在内层循环发现比其更小/更大的时候，将min与该值进行对换。这样的好处是既得到了最小/最大值，同时在循环结束后对第一个值赋值的时候，原来的值也没有丢失。

