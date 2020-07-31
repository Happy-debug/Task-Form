function validateTaskForm() {
      
    if( document.myForm.TaskName.value == "" || document.myForm.TaskName.value.length > 8) {
       alert( "Please provide Task Name(Maximum 8 Characters) " );
      document.myForm.TaskName.focus() ;
       return false;
    }
    if( document.myForm.description.value == ""|| document.myForm.description.value.length > 15) {
       alert( "Please provide Description(Maximum 15 Characters)" );
       document.myForm.description.focus() ;
       return false;
    }
    if( document.myForm.assignedTo.value == ""|| document.myForm.assignedTo.value.length > 8) {
        alert( "Please Assign someone(Maximum 8 Characters)" );
        document.myForm.assignedTo.focus() ;
        return false;
     }
     if( document.myForm.dueDate.value == ""){
        alert( "Please Enter Due Date for task" );
        document.myForm.dueDate.focus() ;
        return false;
     }
}
