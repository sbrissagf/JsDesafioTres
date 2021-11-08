//  ================================================  //

let verification = false;

while (verification === false) {
    let pass = prompt('Ingrese una contraseña \n (mínimo 8 caracteres)');
    if (pass.length < 8) {
        alert("Su contraseña es muy débil");
        continue;
    } else {
        alert("Contraseña creada con éxito");
        verification = true;
    }

    console.log("user: admin / password: " + pass);
}