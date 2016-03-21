
$.fn.mascararTelefone = function() {

    var nums = Array();
    var input = $(this);
 
    input.on('keypress', function(e) {
	var code = e.keyCode || e.which;
        if (code !== 8 && isNaN(String.fromCharCode(code)) || code === 32) {
            e.preventDefault(); //se nao for numero para o codido
        }
        if (input.val().length < 15) {

            var atual = input.val();
            var qtd = input.val().length;

            if (input.val() !== "") {

                if (qtd === 1 && code !== 8) {
                     input.val('(' + atual);
                }
                if (qtd === 3 && code !== 8) {
                    input.val(atual + ') ');
                }
                if (qtd === 9 && code !== 8) {
                    input.val(atual + '-');
                }
                
                if(input.val().indexOf("((") >= 0){
                   input.val(input.val().replace("((","("));
                }

                if (qtd === 14) {
                    if (code !== 8 && isNaN(String.fromCharCode(code)) || code === 32) {
                        return false;
                    }
                    for (i = 0; i < qtd; i++) {
                        nums[i] = atual.substr(i, 1);
                    }
                    input.val(nums[0] + nums[1] + nums[2] + nums[3] + nums[4] + nums[5] + nums[6] + nums[7] + nums[8] + nums[10] + nums[9] + nums[11] + nums[12] + nums[13]);
                }



            }

        } else {
			 if (code !== 8){
            return false;
			 }
        }

    });

    input.on('keyup', function(e) {
		var code = e.keyCode || e.which;
		
        if (code === 8) {
            if (input.val().length === 14) {
                for (i = 0; i < input.val().length; i++) {
                    nums[i] = input.val().substr(i, 1);
                }

                input.val(nums[0] + nums[1] + nums[2] + nums[3] + nums[4] + nums[5] + nums[6] + nums[7] + nums[8] + nums[10] + nums[9] + nums[11] + nums[12] + nums[13]);


            }

        }

    });


};
