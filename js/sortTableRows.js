  $('.jsDTsort').on('click', function(event){
            event.stopImmediatePropagation();
            var curCol = $(this),
                cols = $(this).parent().find('th'),
                tbody = $(this).closest('table').find('tbody'),
                rows = tbody.find('tr').get(),
                count = rows.length,
                colInd = cols.index(curCol),
                curLine, natComp, natComp2,
                endTimeClick, beginTimeClick,
                endTime, beginTime,
                i, j, k, temp, step, counter = 0,
                inc, seq = [], s,
                size_threshold = 16, p, n, d, child,
                ns_a1, ns_b1, ns_L, ns_i, ns_a, ns_b, ns_diff;
 
            const rx = new RegExp('(\.\d+)|(\d+(\.\d+)?)|([^\d.]+)|(\.\D+)|(\.$)', 'g');
 
            function naturalSorter(as, bs){
                if(as === bs) return 0;
                ns_a = as.toLowerCase().match(rx);
                ns_b = bs.toLowerCase().match(rx);
                ns_L = ns_a.length;
                ns_i = 0;
                while(ns_i < ns_L){
                    if( ! ns_b[ns_i]) return 1;
                    ns_a1 = ns_a[ns_i];
                    ns_b1 = ns_b[ns_i++];
                    if(ns_a1 !== ns_b1){
                        ns_diff = ns_a1 - ns_b1;
                        if( ! isNaN(ns_diff)) return ns_diff;
                        return ns_a1 > ns_b1 ? 1 : -1;
                    }
                }
                return ns_b[ns_i] ? -1 : 0;
            }
 
            beginTimeClick = +new Date();
            //tbody.find('tr').remove();
 
            if ( ! curCol.hasClass('jsDTasc') && ! curCol.hasClass('jsDTdesc')){
                cols.removeClass('jsDTasc jsDTdesc').find('span').remove();
                curCol.append('<span></span>');
            }
 
            if (curCol.hasClass('jsDTasc')){
                curCol.removeClass('jsDTasc');
                curCol.addClass('jsDTdesc');
                curCol.find('span').html('&nbsp;&darr;');
                rows.reverse();
            }
            else{
                curCol.addClass('jsDTasc');
                curCol.find('span').html('&nbsp;&uarr;');
                if(curCol.hasClass('jsDTdesc')) {
                    curCol.removeClass('jsDTdesc');
                    rows.reverse();
                }
                else{
                    beginTime = +new Date();
 
                    //-------------- GNOME SORT START -------------------
//                    i = 1;
//                    k = 2;
//                    while(i < count) {
//                        if (naturalSorter(rows[i].children[colInd].innerHTML, rows[i-1].children[colInd].innerHTML) >= 0) {
//                            i = k;
//                            k++;
//                        }
//                        else {
//                            curLine = rows[i];
//                            rows[i] = rows[i-1];
//                            rows[i-1] = curLine;
//                            i--;
//                            if (i == 0){
//                                i = k;
//                                k++;
//                            }
//                        }
//                    }
                    //-------------- GNOME SORT END -------------------------
 
                    //-------------- INSERTION SORT START -------------------
//                    i = 1;
//                    while(i < count) {
//                        if (naturalSorter(rows[i].children[colInd].innerHTML, rows[i-1].children[colInd].innerHTML) >= 0) {
//                            i++;
//                        }
//                        else {
//                            k = i-2;
//                            while(k >= 0){
//                                if (naturalSorter(rows[i].children[colInd].innerHTML, rows[k].children[colInd].innerHTML) < 0) {
//                                    k--;
//                                }
//                                else {
//                                    break;
//                                }
//                            }
//                            curLine = rows.splice(i, 1);
//                            rows.splice((k+1), 0, curLine[0]);
//                            i++;
//                        }
//                    }
                    //-------------- INSERTION SORT END -------------------
 
                    //-------------- SHELL SORT START WITH FIXED STEP -----
//                    step = Math.floor(count/1.247);
//                    while (step > 0) {
//                        for (i = step; i < count; i++) {
//                            temp = rows[i];
//                            for (j = i - step; (j >= 0) && naturalSorter(rows[j].children[colInd].innerHTML, temp.children[colInd].innerHTML) > 0; j -= step)
//                                rows[j + step] = rows[j];
//                            rows[j + step] = temp;
//                        }
//                        step = (step == 2) ? 1 : Math.floor(step / 1.247);
//                    }
 
                    //-------------- SHELL SORT START ---------------------
 
//                    function increment(inc, size){
//                        var p1 = 1, p2 = 1, p3 = 1, s = -1;
//                        do {
//                            if(++s % 2 > 0){
//                                inc.push(8 * p1 - 6 * p2 + 1);
//                            }
//                            else{
//                                inc.push(9 * p1 - 9 * p3 + 1);
//                                p2 *= 2;
//                                p3 *= 2;
//                            }
//                            p1 *= 2;
//                        }
//                        while(3*inc[s] < size);
//                        return s > 0 ? --s : 0;
//                    }
//
//                    s = increment(seq, count);
//                    while (s >= 0) {
//                        inc = seq[s--];
//                        for (i = inc; i < count; i++) {
//                            temp = rows[i];
//                            for (j = i - inc; (j >= 0) && naturalSorter(rows[j].children[colInd].innerHTML, temp.children[colInd].innerHTML) > 0; j -= inc)
//                                rows[j + inc] = rows[j];
//                            rows[j + inc] = temp;
//                        }
//                    }
 
                    //----------------- SHELL SORT END ------------------------
 
 
                    //------------------INTROSORT ----------------
 
//
//                    introsort_loop(rows, 0, count, 2 * floor_lg(count));
//
//                    /*
//                     * Quicksort algorithm modified for Introsort
//                     */
//                    function introsort_loop (a, lo, hi, depth_limit) {
//                        while (hi-lo > size_threshold) {
//                            if (depth_limit === 0) {
//                                heapsort(a, lo, hi);
//                                return;
//                            }
//                            depth_limit=depth_limit-1;
//                            var p = partition(a, lo, hi, medianof3(a, lo, (Math.floor((hi-lo)/2)+lo+1), hi-1));
//
//                            introsort_loop(a, p, hi, depth_limit);
//                            hi = p;
//                        }
//                        insertionsort(a, lo, hi);
//                    }
//
//                    function partition(a, lo, hi, x) {
//                        i=lo; j=hi;
//                        while (true) {
//                            while (naturalSorter(a[i].children[colInd].innerHTML, x.children[colInd].innerHTML) < 0) i++;
//                            j=j-1;
//                            while (naturalSorter(x.children[colInd].innerHTML, a[j].children[colInd].innerHTML) < 0) j=j-1;
//                            if (i >= j) return i;
//                            exchange(a,i,j);
//                            i++;
//                        }
//                    }
//
//                    function medianof3(a, lo, mid, hi) {
//                        if (naturalSorter(a[mid].children[colInd].innerHTML, a[lo].children[colInd].innerHTML) < 0) {
//                            if (naturalSorter(a[hi].children[colInd].innerHTML, a[mid].children[colInd].innerHTML) < 0) {
//                                return a[mid];
//                            } else {
//                                return (naturalSorter(a[hi].children[colInd].innerHTML, a[lo].children[colInd].innerHTML) < 0) ? a[hi] : a[lo];
//                            }
//                        } else {
//                            if (naturalSorter(a[hi].children[colInd].innerHTML, a[mid].children[colInd].innerHTML) < 0) {
//                                return (naturalSorter(a[hi].children[colInd].innerHTML, a[lo].children[colInd].innerHTML) < 0) ? a[lo] : a[hi];
//                            } else {
//                                return a[mid];
//                            }
//                        }
//                    }
//
//                    /*
//                     * Heapsort algorithm
//                     */
//                    function heapsort(a, lo, hi) {
//                        n = hi-lo;
//                        for (i= n / 2; i >= 1; i--) {
//                            downheap(a,i,n,lo);
//                        }
//                        for (i = n; i > 1; i--) {
//                            exchange(a,lo,lo+i-1);
//                            downheap(a,1,i-1,lo);
//                        }
//                    }
//
//                    function downheap(a, i, n, lo) {
//                        d = a[lo+i-1];
//                        while (i<=n/2) {
//                            child = 2*i;
//                            if (child < n && naturalSorter(a[lo+child-1].children[colInd].innerHTML, a[lo+child].children[colInd].innerHTML) < 0) {
//                                child++;
//                            }
//                            if (naturalSorter(d.children[colInd].innerHTML, a[lo+child-1].children[colInd].innerHTML) >= 0) break;
//                            a[lo+i-1] = a[lo+child-1];
//                            i = child;
//                        }
//                        a[lo+i-1] = d;
//                    }
//
//                    /*
//                     * Insertion sort algorithm
//                     */
//                    function insertionsort(a, lo, hi) {
//                        for (i=lo; i < hi; i++) {
//                            j=i;
//                            temp = a[i];
//                            while(j!=lo && naturalSorter(temp.children[colInd].innerHTML, a[j-1].children[colInd].innerHTML) < 0) {
//                                a[j] = a[j-1];
//                                j--;
//                            }
//                            a[j] = temp;
//                        }
//                    }
//
//                    /*
//                     * Common methods for all algorithms
//                     */
//                    function exchange(a, i, j) {
//                        temp =a[i];
//                        a[i]=a[j];
//                        a[j]=temp;
//                    }
//
//                    function floor_lg(a) {
//                        return (Math.floor(Math.log(a)/Math.log(2))) << 0;
//                    }
 
                    //----------------- INTROSORT -------------
 
 
 
 
 
 
 
 
                    //------------------INTROSORT ----------------
 
                    introsort_loop(rows, 0, count, 2 * floor_lg(count));
 
                    /*
                     * Quicksort algorithm modified for Introsort
                     */
                    function introsort_loop (a, lo, hi, depth_limit) {
                        while (hi-lo > size_threshold) {
                            if (depth_limit === 0) {
                                shellsort(a, lo, hi);
                                return;
                            }
                            depth_limit=depth_limit-1;
                            var p = partition(a, lo, hi, medianof3(a, lo, (Math.floor((hi-lo)/2)+lo+1), hi-1));
 
                            introsort_loop(a, p, hi, depth_limit);
                            hi = p;
                        }
                        insertionsort(a, lo, hi);
                    }
 
                    function partition(a, lo, hi, x) {
                        i=lo; j=hi;
                        while (true) {
                            while (naturalSorter(a[i].children[colInd].innerHTML, x.children[colInd].innerHTML) < 0) i++;
                            j=j-1;
                            while (naturalSorter(x.children[colInd].innerHTML, a[j].children[colInd].innerHTML) < 0) j=j-1;
                            if (i >= j) return i;
                            exchange(a,i,j);
                            i++;
                        }
                    }
 
                    function medianof3(a, lo, mid, hi) {
                        if (naturalSorter(a[mid].children[colInd].innerHTML, a[lo].children[colInd].innerHTML) < 0) {
                            if (naturalSorter(a[hi].children[colInd].innerHTML, a[mid].children[colInd].innerHTML) < 0) {
                                return a[mid];
                            } else {
                                return (naturalSorter(a[hi].children[colInd].innerHTML, a[lo].children[colInd].innerHTML) < 0) ? a[hi] : a[lo];
                            }
                        } else {
                            if (naturalSorter(a[hi].children[colInd].innerHTML, a[mid].children[colInd].innerHTML) < 0) {
                                return (naturalSorter(a[hi].children[colInd].innerHTML, a[lo].children[colInd].innerHTML) < 0) ? a[lo] : a[hi];
                            } else {
                                return a[mid];
                            }
                        }
                    }
 
                    /*
                     * Heapsort algorithm
                     */
                    function shellsort(a, lo, hi) {
                        function increment(inc, size){
                            var p1 = 1, p2 = 1, p3 = 1, s = -1;
                            do {
                                if(++s % 2 > 0){
                                    inc.push(8 * p1 - 6 * p2 + 1);
                                }
                                else{
                                    inc.push(9 * p1 - 9 * p3 + 1);
                                    p2 *= 2;
                                    p3 *= 2;
                                }
                                p1 *= 2;
                            }
                            while(3*inc[s] < size);
                            return s > 0 ? --s : 0;
                        }
 
                        seq = [];
                        s = increment(seq, hi-lo);
                        while (s >= 0) {
                            inc = seq[s--];
                            for (i = inc + lo; i < hi; i++) {
                                temp = a[i];
                                for (j = i - inc; (j >= lo) && naturalSorter(a[j].children[colInd].innerHTML, temp.children[colInd].innerHTML) > 0; j -= inc){
                                    a[j + inc] = a[j];
                                }
                                a[j + inc] = temp;
                            }
                        }
 
                    }
 
                    /*
                     * Insertion sort algorithm
                     */
                    function insertionsort(a, lo, hi) {
                        for (i=lo; i < hi; i++) {
                            j=i;
                            temp = a[i];
                            while(j!=lo && naturalSorter(temp.children[colInd].innerHTML, a[j-1].children[colInd].innerHTML) < 0) {
                                a[j] = a[j-1];
                                j--;
                            }
                            a[j] = temp;
                        }
                    }
 
                    /*
                     * Common methods for all algorithms
                     */
                    function exchange(a, i, j) {
                        temp =a[i];
                        a[i]=a[j];
                        a[j]=temp;
                    }
 
                    function floor_lg(a) {
                        return (Math.floor(Math.log(a)/Math.log(2))) << 0;
                    }
 
                    //----------------- INTROSORT -------------
 
 
//        function SpeedTest(testImplement, testParams, repetitions){
//            this.testImplement = testImplement;
//            this.testParams = testParams;
//            this.repetitions = repetitions;
//            this.average = 0;
//        }
//
//        SpeedTest.prototype = {
//            startTest : function(){
//                var beginTime, endTime, sumTimes = 0,
//                    i, x;
//                for (i = 0, x = this.repetitions; i < x; i++){
//                    beginTime = +new Date();
//                    this.testImplement(this.testParams);
//                    endTime = +new Date();
//                    sumTimes += endTime - beginTime;
//                }
//                this.average = sumTimes / this.repetitions;
//                return console.log("Average execution: " + this.average + " for " + this.repetitions + " repetitions\nTotal time: " + sumTimes + " ms");
//            }
//        };
//
//        var speed = new SpeedTest(naturalSorter, [rows[7].children[colInd].innerHTML, rows[9].children[colInd].innerHTML], 200000);
//        speed.startTest();
 
//console.log('counn ' + counter);
 
                    endTime = +new Date();
                    console.log('sort ' + (endTime-beginTime) + ' ms');
               }
            }
            tbody.prepend(rows);
            endTimeClick = +new Date();
            console.log('click ' + (endTimeClick-beginTimeClick) + ' ms');
        });