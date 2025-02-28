function add()
    {
      var val1=parseInt(document.getElementById('variable1').value);
      var val2=parseInt(document.getElementById('variable2').value);
      var sum=document.getElementById('answer');
      sum.value=val1+val2;
    }
    function sub()
    {
      var val1=parseInt(document.getElementById('variable1').value);
      var val2=parseInt(document.getElementById('variable2').value);
      var sum=document.getElementById('answer');
      sum.value=val1-val2;
    }
    function mul()
    {
      var val1=parseInt(document.getElementById('variable1').value);
      var val2=parseInt(document.getElementById('variable2').value);
      var sum=document.getElementById('answer');
      sum.value=val1*val2;
    }
    function div()
    {
      var val1=parseInt(document.getElementById('variable1').value);
      var val2=parseInt(document.getElementById('variable2').value);
      var sum=document.getElementById('answer');
      sum.value=val1%val2;
    }

    function appendNumber(num) {
        let activeElement = document.activeElement;
        if (activeElement.id === 'variable1' || activeElement.id === 'variable2') {
            activeElement.value += num;
        }
    }
