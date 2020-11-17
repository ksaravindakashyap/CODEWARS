from collections import defaultdict

def prime_factors(n):
    if n > 0:
        p = 2
        a = []
        while n >= (p**2):
            if n%p == 0:
                n = n/p
                a.append(p)
                #print(a)
                continue
            else:
                p = p+1
                continue
        else:
            a.append(int(n))
            #print(a)

        counts = defaultdict(int)
        for x in a:
            counts[x] += 1

        print("'", end="")
        for k,v in counts.items():
            #print(k,v,end=" ")
            b = ""

            if v!= 1:
                b =b.join("("+str(k)+"**"+str(v)+")")
                print(b,end="")

            elif v == 1:
                b = b.join("("+str(k)+")")
                print(b,end="")
        print("'",end="")
    else:
        print("enter valid number")


prime_factors(n)
 #n --> may be any integer number.
