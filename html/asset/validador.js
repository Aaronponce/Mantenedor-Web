  /*
 ********************************
 * Validador de formulario      *
 * Autor : Aaron Ponce Sandoval *
 ********************************
*/
  $(document).ready(validar);

  function main(){

    $("#Registrar").click(validar);
  }

  function validar() {
      $('#Registro').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            trabajo: {
                validators: {
                        notEmpty: {
                        message: 'Por favor indique el fecha'
                    }
                }
            },
            nombre: {
                validators: {
                        stringLength: {
                        min: 2,
                    },
                        notEmpty: {
                        message: 'Por favor indique el nombre'
                    }
                }
            },
             apellido: {
                validators: {
                     stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: 'Por favor indique el apellido'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Por favor indique el email'
                    },
                    emailAddress: {
                        message: 'Por favor indique un email valido'
                    }
                }
            },
            carrera: {
                validators: {
                    notEmpty: {
                        message: 'Por favor indique carrera'
                    }
                }
            },
            mencion: {
                validators: {
                    notEmpty: {
                        message: 'Por favor indique menciòn '
                    }
                }
            },
            titulo: {
                validators: {
                    notEmpty: {
                        message: 'Por favor indique el titulo del trabajo '
                    }
                }
            },
            profesor_guia: {
                validators: {
                    notEmpty: {
                        message: 'Por favor indique el profesor guia'
                    }
                }
            },
            profesor_corf1: {
                validators: {
                    notEmpty: {
                        message: 'Por favor indique el profesor correferente I'
                    }
                }
            },
            profesor_corf2: {
                validators: {
                    notEmpty: {
                        message: 'Por favor indique el profesor correferente II'
                    }
                }
            },
            resumen: {
                validators: {
                      stringLength: {
                        min: 10,
                        max: 200,
                        message:'Por favor ingrese un reseumen de 10 caracteres como minimo y maximo 200'
                    },
                    notEmpty: {
                        message: 'Por favor ingrese un resumen del trabajo de titulo de minimo 10 caracteres y maximo 200'
                    }
                    }
                }
            }
        })
        .on('success.form.bv', function(e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
                $('#Registro').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');
        });
  }
