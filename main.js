
    function generateCode() {
        let name = document.getElementById("name").value;
        let surname = document.getElementById("surname").value;
        let phone = document.getElementById("phone").value;
        let code = Math.random().toString().slice(-10);
        document.getElementById("code").innerHTML = `Code: ${code}`;
        //Assign the code to the user's name, surname, and phone number
    }

      
