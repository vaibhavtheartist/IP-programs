--bubble sort
bbsort.[]=[]
bbsort.xs=bb1.(bs.xs)
bb1.xs=bbsort.(take.(length.xs-1).xs) ++ drop.((length.xs)-1).xs
bs.(x::xs)=bsort.x.xs
bsort.x.[]=[x]
bsort.x.(y::xs)
	|x>y=y::bsort.x.xs
	|otherwise=x::bsort.y.xs

