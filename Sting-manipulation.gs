--function to check sublist present or not (True/False)
--Input: sublist."string"."substring to find"

sublist.[].[]=True
sublist.xs.[]=True
sublist.[].ys=False
sublist.xs.ys=sub1.xs.ys.xs.ys
sub1.[].[].xx.yy=True
sub1.[].x.xx.yy=False
sub1.x.[].xx.yy=True
sub1.(x::xs).(y::ys).xx.yy
	|x==y=check.xs.ys.xs.yy
	|otherwise=sublist.xs.yy
check.[].[].xx.yy=True
check.[].x.xx.yy=False
check.x.[].xx.yy=True
check.(x::xs).(y::ys).xx.yy
	|x==y=check.xs.ys.xx.yy
	|otherwise=sublist.xx.yy

--Function to count no of substring found in the list
--input: subcount."sting"."substring to find"

subcount.[].[]=1
subcount.xs.[]=1
subcount.[].ys=0
subcount.xs.ys=sub2.xs.ys.xs.ys
sub2.[].[].xx.yy=1+subcount.xx.yy
sub2.[].x.xx.yy=0+subcount.xx.yy
sub2.x.[].xx.yy=1+subcount.xx.yy
sub2.(x::xs).(y::ys).xx.yy
	|x==y=check1.xs.ys.xs.yy
	|otherwise=subcount.xs.yy
check1.[].[].xx.yy=1+subcount.xx.yy
check1.[].x.xx.yy=0+subcount.xx.yy
check1.x.[].xx.yy=1+subcount.xx.yy
check1.(x::xs).(y::ys).xx.yy
	|x==y=check1.xs.ys.xx.yy
	|otherwise=subcount.xx.yy


