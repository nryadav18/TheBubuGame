
if (matchMedia("(max-width: 600px)").matches) {
    var size = Number(prompt("Enter Size"));
    var body = document.getElementsByTagName('body')[0];
    body.style.height = "100svh";
    body.style.width = "100svw";
    body.style.display = "flex";
    body.style.justifyContent = "center";
    body.style.alignItems = "center";
    body.style.flexDirection = "column";
    body.style.gap = "30px";

    var buttons = document.getElementsByTagName('div')[0];
    buttons.style.display = "flex";
    buttons.style.backgroundColor = "#4682b4";
    buttons.style.color = "white";
    buttons.style.borderRadius = "10px";

    var tb = document.getElementsByTagName('table')[0];
    tb.style.opacity = "1";
    tb.style.borderCollapse = "collapse";

    for (var i = 0; i < size; i++) {
        var tr = document.createElement("tr");
        tr.style.height = "70px";
        var w = size * 70;
        tr.style.width = w + 'px';
        for (var j = 0; j < size; j++) {
            var td = document.createElement("td");
            td.style.height = "70px";
            td.style.width = "70px";
            td.style.border = "2px solid #4682b4";
            td.style.backgroundColor = "#87cefa";
            tr.appendChild(td);
        }
        tb.append(tr);
    }

    var tr = document.createElement("tr");
    tb.appendChild(tr);
    var pos = 12;
    var initial = document.getElementsByTagName("td")[pos];
    initial.style.border = "3px solid yellow"

    var img = document.createElement("img");
    img.src = "assets/bubuWalk.gif";
    img.style.height = "50px";
    img.style.width = "50px";
    img.style.position = "relative";
    img.style.transition = "transform 0.5s, left 1s linear, top 1s linear";
    var dLeft = 0;
    var dTop = 0;
    img.style.left = dLeft + 'px';
    img.style.top = dTop + 'px';
    initial.appendChild(img);

    leftClick = () => {
        if (pos % size === 0) {
            alert("You Reached the Boundary Buddy!");
        } else {
            initial.style.border = "2px solid #4682b4";
            let mod = document.getElementsByTagName("td")[pos-1]
            mod.style.border = "3px solid yellow"
            initial = mod;
            if (img.style.transform === "scaleX(-1)"){
                pos -= 1;
                dLeft -= 70;
                img.style.left = dLeft + 'px';
            }
            else{
                img.style.transform = "scaleX(-1)";
                setTimeout(() => {
                    pos -= 1;
                    dLeft -= 70;
                    img.style.left = dLeft + 'px';
                }, 500);
            }
            
        }
    }

    rightClick = () => {
        if ((pos + 1) % size === 0) {
            alert("You Reached the Boundary Buddy!");
        } else {
            initial.style.border = "2px solid #4682b4";
            let mod = document.getElementsByTagName("td")[pos+1]
            mod.style.border = "3px solid yellow"
            initial = mod;
            if (img.style.transform === "scaleX(1)"){
                pos += 1;
                dLeft += 70;
                img.style.left = dLeft + 'px';
            }
            else{
                img.style.transform = "scaleX(1)";
                setTimeout(() => {
                    pos += 1;
                    dLeft += 70;
                    img.style.left = dLeft + 'px';
                }, 500);
            }
        }
    }
    
    topClick = () => {
        if (pos < size) {
            alert("You Reached the Boundary Buddy!");
        } else {
            initial.style.border = "2px solid #4682b4";
            let mod = document.getElementsByTagName("td")[pos-size]
            mod.style.border = "3px solid yellow"
            initial = mod;
            pos -= size;
            dTop -= 70;
            img.style.top = dTop + 'px';
        }
    }

    
    bottomClick = () => {
        let lb = (size * size) - size;
        let up = (size * size) - 1;
        if (pos >= lb && pos <= up) {
            alert("You Reached the Boundary Buddy!");
        } else {
            initial.style.border = "2px solid #4682b4";
            let mod = document.getElementsByTagName("td")[pos+size]
            mod.style.border = "3px solid yellow"
            initial = mod;
            pos += size;
            dTop += 70;
            img.style.top = dTop + 'px';
        }
    }

    leftHover = (event) => {
        var p1 = document.getElementsByTagName('p')[0];
        p1.style.opacity = "0";
        var i1 = document.getElementById('left');
        i1.style.display = "block";
        let Left = document.getElementsByClassName('left')[0];
        Left.style.cursor = "pointer";
    }
    leftLeave = (event) => {
        var p1 = document.getElementsByTagName('p')[0];
        p1.style.opacity = "1";
        var i1 = document.getElementById('left');
        i1.style.display = "none";
        let Left = document.getElementsByClassName('left')[0];
    }

    rightHover = (event) => {
        var p1 = document.getElementsByTagName('p')[1];
        p1.style.opacity = "0";
        var i1 = document.getElementById('right');
        i1.style.display = "block";
        let Right = document.getElementsByClassName('right')[0];
        Right.style.cursor = "pointer";
    }
    rightLeave = (event) => {
        var p2 = document.getElementsByTagName('p')[1];
        p2.style.opacity = "1";
        var i2 = document.getElementById('right');
        i2.style.display = "none";
    }
    topHover = (event) => {
        var p3 = document.getElementsByTagName('p')[2];
        p3.style.opacity = "0";
        var i3 = document.getElementById('top');
        i3.style.display = "block";
        let Top = document.getElementsByClassName('top')[0];
        Top.style.cursor = "pointer";
    }
    topLeave = (event) => {
        var p3 = document.getElementsByTagName('p')[2];
        p3.style.opacity = "1";
        var i3 = document.getElementById('top');
        i3.style.display = "none";
    }
    
    
    bottomHover = (event) => {
        var p4 = document.getElementsByTagName('p')[3];
        p4.style.opacity = "0";
        var i4 = document.getElementById('bottom');
        i4.style.display = "block";
        let Bottom = document.getElementsByClassName('bottom')[0];
        Bottom.style.cursor = "pointer";
    }
    bottomLeave = (event) => {
        var p4 = document.getElementsByTagName('p')[3];
        p4.style.opacity = "1";
        var i4 = document.getElementById('bottom');
        i4.style.display = "none";
    }
    var l = document.getElementsByClassName('left')[0];
    l.addEventListener('mouseover', leftHover);
    l.addEventListener("mouseleave", leftLeave);
    l.addEventListener('click', leftClick);

    var r = document.getElementsByClassName('right')[0];
    r.addEventListener('mouseover', rightHover);
    r.addEventListener("mouseleave", rightLeave);
    r.addEventListener('click', rightClick);

    var t = document.getElementsByClassName('top')[0];
    t.addEventListener('mouseover', topHover);
    t.addEventListener("mouseleave", topLeave);
    t.addEventListener('click', topClick);

    var b = document.getElementsByClassName('bottom')[0];
    b.addEventListener('mouseover', bottomHover);
    b.addEventListener("mouseleave", bottomLeave);
    b.addEventListener('click', bottomClick);

}

else{
    var size = Number(prompt("Enter Size"));
    var body = document.getElementsByTagName('body')[0];
    body.style.height = "100svh";
    body.style.width = "100svw";
    body.style.display = "flex";
    body.style.justifyContent = "center";
    body.style.alignItems = "center";
    body.style.flexDirection = "column";
    body.style.gap = "30px";

    var buttons = document.getElementsByTagName('div')[0];
    buttons.style.display = "flex";
    buttons.style.backgroundColor = "#4682b4";
    buttons.style.color = "white";
    buttons.style.borderRadius = "10px";

    var tb = document.getElementsByTagName('table')[0];
    tb.style.opacity = "1";
    tb.style.borderCollapse = "collapse";

    for (var i = 0; i < size; i++) {
        var tr = document.createElement("tr");
        tr.style.height = "100px";
        var w = size * 100;
        tr.style.width = `${w}px`;
        for (var j = 0; j < size; j++) {
            var td = document.createElement("td");
            td.style.height = "100px";
            td.style.width = "100px";
            td.style.border = "2px solid #4682b4";
            td.style.backgroundColor = "#87cefa";
            tr.appendChild(td);
        }
        tb.append(tr);
    }

    var tr = document.createElement("tr");
    tb.appendChild(tr);
    var pos = 12;
    var initial = document.getElementsByTagName("td")[pos];
    initial.style.border = "3px solid yellow"

    var img = document.createElement("img");
    img.src = "assets/bubuWalk.gif";
    img.style.height = "80px";
    img.style.width = "80px";
    img.style.position = "relative";
    img.style.transition = "transform 0.5s, left 1s linear, top 1s linear";
    var dLeft = 0;
    var dTop = 0;
    img.style.left = dLeft + 'px';
    img.style.top = dTop + 'px';
    initial.appendChild(img);

    leftClick = () => {
        if (pos % size === 0) {
            alert("You Reached the Boundary Buddy!");
        } else {
            initial.style.border = "2px solid #4682b4";
            let mod = document.getElementsByTagName("td")[pos-1]
            mod.style.border = "5px solid yellow"
            initial = mod;
            if (img.style.transform === "scaleX(-1)"){
                pos -= 1;
                dLeft -= 100;
                img.style.left = dLeft + 'px';
            }
            else{
                img.style.transform = "scaleX(-1)";
                setTimeout(() => {
                    pos -= 1;
                    dLeft -= 100;
                    img.style.left = dLeft + 'px';
                }, 500);
            }
            
        }
    }

    rightClick = () => {
        if ((pos + 1) % size === 0) {
            alert("You Reached the Boundary Buddy!");
        } else {
            initial.style.border = "2px solid #4682b4";
            let mod = document.getElementsByTagName("td")[pos+1]
            mod.style.border = "5px solid yellow"
            initial = mod;
            if (img.style.transform === "scaleX(1)"){
                pos += 1;
                dLeft += 100;
                img.style.left = dLeft + 'px';
            }
            else{
                img.style.transform = "scaleX(1)";
                setTimeout(() => {
                    pos += 1;
                    dLeft += 100;
                    img.style.left = dLeft + 'px';
                }, 500);
            }
        }
    }

    
    topClick = () => {
        if (pos < size) {
            alert("You Reached the Boundary Buddy!");
        } else {
            initial.style.border = "2px solid #4682b4";
            let mod = document.getElementsByTagName("td")[pos-size]
            mod.style.border = "5px solid yellow"
            initial = mod;
            pos -= size;
            dTop -= 100;
            img.style.top = dTop + 'px';
        }
    }

    
    bottomClick = () => {
        let lb = (size * size) - size;
        let up = (size * size) - 1;
        if (pos >= lb && pos <= up) {
            alert("You Reached the Boundary Buddy!");
        } else {
            initial.style.border = "2px solid #4682b4";
            let mod = document.getElementsByTagName("td")[pos+size]
            mod.style.border = "5px solid yellow"
            initial = mod;
            pos += size;
            dTop += 100;
            img.style.top = dTop + 'px';
        }
    }

    leftHover = (event) => {
        var p1 = document.getElementsByTagName('p')[0];
        p1.style.opacity = "0";
        var i1 = document.getElementById('left');
        i1.style.display = "block";
        let Left = document.getElementsByClassName('left')[0];
        Left.style.cursor = "pointer";
    }
    leftLeave = (event) => {
        var p1 = document.getElementsByTagName('p')[0];
        p1.style.opacity = "1";
        var i1 = document.getElementById('left');
        i1.style.display = "none";
        let Left = document.getElementsByClassName('left')[0];
    }

    rightHover = (event) => {
        var p1 = document.getElementsByTagName('p')[1];
        p1.style.opacity = "0";
        var i1 = document.getElementById('right');
        i1.style.display = "block";
        let Right = document.getElementsByClassName('right')[0];
        Right.style.cursor = "pointer";
    }
    rightLeave = (event) => {
        var p2 = document.getElementsByTagName('p')[1];
        p2.style.opacity = "1";
        var i2 = document.getElementById('right');
        i2.style.display = "none";
    }

    topHover = (event) => {
        var p3 = document.getElementsByTagName('p')[2];
        p3.style.opacity = "0";
        var i3 = document.getElementById('top');
        i3.style.display = "block";
        let Top = document.getElementsByClassName('top')[0];
        Top.style.cursor = "pointer";
    }
    topLeave = (event) => {
        var p3 = document.getElementsByTagName('p')[2];
        p3.style.opacity = "1";
        var i3 = document.getElementById('top');
        i3.style.display = "none";
    }
    
    bottomHover = (event) => {
        var p4 = document.getElementsByTagName('p')[3];
        p4.style.opacity = "0";
        var i4 = document.getElementById('bottom');
        i4.style.display = "block";
        let Bottom = document.getElementsByClassName('bottom')[0];
        Bottom.style.cursor = "pointer";
    }
    bottomLeave = (event) => {
        var p4 = document.getElementsByTagName('p')[3];
        p4.style.opacity = "1";
        var i4 = document.getElementById('bottom');
        i4.style.display = "none";
    }

    
    var l = document.getElementsByClassName('left')[0];
    l.addEventListener('mouseover', leftHover);
    l.addEventListener("mouseleave", leftLeave);
    l.addEventListener('click', leftClick);

    var r = document.getElementsByClassName('right')[0];
    r.addEventListener('mouseover', rightHover);
    r.addEventListener("mouseleave", rightLeave);
    r.addEventListener('click', rightClick);

    var t = document.getElementsByClassName('top')[0];
    t.addEventListener('mouseover', topHover);
    t.addEventListener("mouseleave", topLeave);
    t.addEventListener('click', topClick);

    var b = document.getElementsByClassName('bottom')[0];
    b.addEventListener('mouseover', bottomHover);
    b.addEventListener("mouseleave", bottomLeave);
    b.addEventListener('click', bottomClick);
}




