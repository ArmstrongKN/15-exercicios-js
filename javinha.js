function ex()
{
    var n1 = parseFloat(prompt("Informe a Quantidade de Notas:"));
    var i = 0
    var n3 = 0
    while(i<n1)
    {
        var n2 = parseFloat(prompt("Informe a nota:"));
        var n3 = (n3+n2);
        var total = n3/n1;
    i++
    }

    alert("A média das Notas é : " + total);
}

function ex1()
{
    var n1 = parseFloat(prompt("Informe as Notas:"));
    var n2 = parseFloat(prompt("Informe as Notas:"));   
    var n3 = parseFloat(prompt("Informe as Notas:"));
    var n4 = parseFloat(prompt("Informe as Notas:"));
    var n5 = parseFloat(prompt("Informe as Notas:"));

    var media = (n1 + n2 + n3 + n4 + n5) /5
    alert("A média das Notas é : " + media);
}









function ex()
{
   var n1 = parseFloat(prompt("Informe 1 Valor" ))
   var n2 = parseFloat(prompt("Informe 2 Valor" ))
   var n3 = parseFloat(prompt("Informe 3 Valor" ))
   var n4 = parseFloat(prompt("Informe 4 Valor" ))
   var n5 = parseFloat(prompt("Informe 5 Valor" ))
   
   n1 = n1*n1
   n2 = n2*n2
   n3 = n3*n3
   n4 = n4*n4
   n5 = n5*n5
   
   alert("O Quadrado dos valores é: " + n1 +" , " + n2 +" , " + n3 +" , " + n4 +" e " + n5)

}

function ex2()
{
    var n1 = parseFloat(prompt("Informe 1 Valor" ))
    var n2 = parseFloat(prompt("Informe 2 Valor" ))
    var n3 = parseFloat(prompt("Informe 3 Valor" ))
    var n4 = parseFloat(prompt("Informe 4 Valor" ))
    var n5 = parseFloat(prompt("Informe 5 Valor" ))
    
    n1 = n1**2
    n2 = n2**2
    n3 = n3**2
    n4 = n4**2
    n5 = n5**2 
    
   document.write("O Quadrado dos valores é: " + n1 +" , " + n2 +" , " + n3 +" , " + n4 +" e " + n5)
}


function ex()
{
    var n3 = 0
    
    for(i = 0; i<=5; i++)
        {
            var n1 = parseFloat(prompt("Informe os Valores:"))
                if(n1>n3)
                    {   
                        n3 = n1
                    }
        }
     alert("O maior numero digitado foi: " + n3)   

}

function ex3()
{
    var n3 = 0
    i = 0
    
    while(i<5)
        {
            var n1 = parseFloat(prompt("Informe os Valores:"))
                if(n1>n3)
                    {   
                        n3 = n1
                    }
            i++
        }
     document.write("O maior numero digitado foi: " + n3)  

}






function ex()
{
   var n1 = parseFloat(prompt("Informe a quantidade de alunos:"))
   var maior = 0
   var menor = 0

    for(var n2 = 0; n2<n1; n2++)
        {
            var idade = parseFloat(prompt("Informe as Idades"))
            if(idade>18)
            {
               maior++ 
            }
            else
            {
                menor++
            }
        }
    alert("Maiores:" + maior + "     Menores: " + menor)    

}
function ex4()
{
    var maior = 0
    var menor = 0

    for(var n1 = 1; n1<=5; n1++)
    {
        var idade = parseFloat(prompt("Informe as Idades"))
        if(idade>18)
        {
           maior++ 
        }
        else
        {
            menor++
        }
    }
document.write("Maiores:" + maior + "<br/>Menores: " + menor)   
}


function ex5()
{

        m = 0
        f = 0
        a = 0
        fim = 0
    
        for(var i=0; i<5; i++)
        {  
            var sexo = prompt("digite o sexo")
            var altura = parseInt(prompt("digite a altura:"))
            
            if(sexo == "m")
            {
                m++
                
                if(altura>a)
                {
                    a = altura
                    fim = "masculino"
                }
    
            }
            if(sexo == "f")
            {
                f++
                
                if(altura>a)
                {
                    a = altura
                    fim = "feminino"
                }
                
            } 
    
        }
        alert("Femininos: " + f + "masculinos: " + m) 
        alert("mais alto é "+ fim + "  altura: " + a)
}



function ex6()
{   
    var nome1 = prompt("digite o nome")
    var nome2 = prompt("digite o nome")
    var nome3 = prompt("digite o nome")
    var nome4 = prompt("digite o nome")
    var nome5 = prompt("digite o nome")

    document.write(nome5 + "</br>" + nome4 + "</br>" + nome3 + "</br>" + nome2 + "</br>" + nome1)


}


function ex7()
{
    var d = parseInt(prompt("Diigte Dia:"))
    var m = parseInt(prompt("Diigte Mes:"))
    var a = parseInt(prompt("Diigte Ano:"))

    document.write(d + "/" + m + "/" + a)

}


function ex8()
{
    var a = 0

    for(var i=0; i<=100; i++)
    {
        var res = i % 2
            if(res == 0)
                {
                    var a = a + i
                }     
    }

    alert(a)
}

function ex9()
{
    while(1<2)
        {
            var a = parseInt(prompt("Digite um valor de 1 a 10 !! "))
                if(a<=10 && a>=1)
                    {
                        alert ("Ok obrigado!")
                        break
                    }       
        }
}

function ex10()
{
    for(var i=0; i<=20; i++)
        {
            document.write(i)            
        }
        for(var a=0; a<=20; a++)
        {
            document.write(a + "</br>")            
        }
}

function ex11()
{
    var n2 = 0
    var n3 = 0
    
    for(i = 0; i<=5; i++)
        {
            var n1 = parseFloat(prompt("Informe os Valores:"))
                if(n1>n3)
                    {   
                        n3 = n1
                    }
        }
     alert("O maior numero digitado foi: " + n3)   
}

function ex12()
{
    var n3 = 0
    var n2 = 0
    for(i = 1; i<=5; i++)
        {
            var n1 = parseFloat(prompt("Informe os Valores:"))
                n2 = n2 + n1
                if (n1>n3)
                    {   
                        n3 = n1
                      
                    }
        }
    var media = n2/5    
     alert("O maior numero digitado foi: " + n3 + "    A media desses numeros é:" + media)


}

function ex13()
{
    var a = 0

    for(var i=0; i<=50; i++)
    {
        var res = i % 2
            if(res == 1)
                {
                    document.write(i + "<br/>")
                }     
    }
}

function ex14()
{
    var n1 = parseInt(prompt("digite o inicio"))
    var n2 = parseInt(prompt("digite o fim"))
    var n1 = n1 + 1

    while(n1<n2)
        {           
            document.write(n1 + "<br/>") 
            n1++
        }
}

function ex15()

{
    var n1 = parseInt(prompt("digite o inicio"))
    var n2 = parseInt(prompt("digite o fim"))
    var n1 = n1 + 1
    var soma = 0

    while(n1<n2)
        {           
            document.write(n1 + "<br/>") 
            soma = soma + n1
            n1++
        }

    document.write("a soma dos numeros do intervalo é: " + soma)


}