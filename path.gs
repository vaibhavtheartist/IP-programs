 --Starting time 8:00pm 27/09/2017

mat.x.s.e=fun1.x.s.e.[s]

fun1.x.s.e.pre=fun3.(fun2.(x!!(s-1)).1.e.pre.x).s

fun2.[].n.e.pre.y=[]
fun2.(x::xs).n.e.pre.y
	|x==1&&n==e=[e]::fun2.xs.(n+1).e.pre.y
	|x==1&&(check.pre.n)=(fun1.y.n.e.(n::pre))++fun2.xs.(n+1).e.pre.y
	|otherwise=fun2.xs.(n+1).e.pre.y

fun3.[].y=[]
fun3.(x::xs).y=(y::x)::fun3.xs.y

check.[].n=True
check.(x::xs).n
	|x==n=False
	|otherwise=check.xs.n

--Success Time 3:26 AM 28/09/2017