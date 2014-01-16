
jQuery.fn.mascarar = function() {

    var nums = Array();

    $(this).on('keypress', function(e) {
        if (e.which != 8 && isNaN(String.fromCharCode(e.which)) || e.which == 32) {
            e.preventDefault(); //se nao for numero para o codido
        }
        if ($(this).val().length < 15) {

            var atual = $(this).val();
            var qtd = $(this).val().length;

            if ($(this).val() != "") {

                if (qtd == 1) {
                    $(this).val('(' + atual);
                }
                if (qtd == 3) {
                    $(this).val(atual + ') ');
                }
                if (qtd == 9) {
                    $(this).val(atual + '-');
                }

                if (qtd == 14) {
                    if (e.which != 8 && isNaN(String.fromCharCode(e.which)) || e.which == 32) {
                        return false;
                    }
                    for (i = 0; i < qtd; i++) {
                        nums[i] = atual.substr(i, 1)
                    }
                    $(this).val(nums[0] + nums[1] + nums[2] + nums[3] + nums[4] + nums[5] + nums[6] + nums[7] + nums[8] + nums[10] + nums[9] + nums[11] + nums[12] + nums[13]);
                }



            }

        } else {
            return false;
        }

    });

    $(this).on('keyup', function(e) {
        if (e.keyCode == 8) {
            if ($(this).val().length == 14) {
                for (i = 0; i < $(this).val().length; i++) {
                    nums[i] = $(this).val().substr(i, 1)
                }

                $(this).val(nums[0] + nums[1] + nums[2] + nums[3] + nums[4] + nums[5] + nums[6] + nums[7] + nums[8] + nums[10] + nums[9] + nums[11] + nums[12] + nums[13]);


            }

        }

    });


};
