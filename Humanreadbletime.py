def make_readable(seconds):
    m = h = m1 = seconds1 = 0
    if seconds < 60:
        print("1->%02d:%02d:%02d" % (h,m,seconds))
        exit(0)
    elif seconds == 60:
        seconds = seconds%60
        m = m + 1
        # print("2->%02d:%02d:%02d" % (h,m,seconds))
        exit(0)
    else:
        while seconds > 60:
            if seconds%60 == 0:
                seconds1 = seconds/60
                print(seconds)
                m = m + seconds1
                print(m)
                seconds = seconds%60
                # print("3->%02d:%02d:%02d" % (h, m ,seconds))
            else:
                seconds = seconds - 60
                m = m+1
                # print("4->%02d:%02d:%02d" % (h, m, seconds))

        if m < 60:
            print("5->%02d:%02d:%02d" % (h, m, seconds))
        elif m == 60:
            m = m%60
            h = h+1
            # print("6->%02d:%02d:%02d" % (h, m, seconds))
        else:
            while m > 60:
                if m%60 == 0:
                    m1 = m/60
                    h = h+m1
                    m = m % 60

                    # print("7->%02d:%02d:%02d" % (h, m, seconds))
                else:
                    m = m-60
                    h = h+1
                    # print("8->%02d:%02d:%02d" % (h, m, seconds))

    print("final->%02d:%02d:%02d" % (h, m, seconds))

make_readable(210240)






