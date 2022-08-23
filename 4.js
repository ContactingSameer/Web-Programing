function calculate()
{
     var name=document.employee.name.value;
     var empno=document.employee.empno.value;
     var bp=parseInt(document.employee.bpay.value);
     var hra=0.4*bp;
     var da=0.6*bp;
     var gross=bp+hra+da;
     var pf=0.13*gross;
     var tax=0.2*gross;
     var deductions=pf+tax;
     var netsalary=gross-deductions;
     document.writeln(" <h2>Employee Salary details </h2>" );
     document.writeln("<pre> <b> Name: "+name+"</b></pre>");
     document.writeln("<pre> <b> Employee No: "+empno+"</b></pre>");
     document.writeln("<pre> <b> HRA(40% of Basic):Rs."+hra+"</b></pre>");
     document.writeln("<pre> <b> DA(60% of Basic):Rs. "+da+"</b></pre>");
     document.writeln("<pre> <b> Gross Salary: "+gross+"</b></pre>");
     document.writeln("<pre> <b> PF(13% of Gross):Rs. "+pf+"</b></pre>");
     document.writeln("<pre> <b> Tax(20% of Gross):Rs. "+tax+"</b></pre>");
     document.writeln("<pre> <b> Deduction:Rs."+deductions+"</b></pre>");
     document.writeln("<pre> <b> NetSalary:Rs."+netsalary+"</b></pre>");
 

}