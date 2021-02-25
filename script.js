cl=(e)=> console.log(e);
cl("let's start");
data = {
	"phy":{
		"phy1":{
			"2018":{
				"nor": "test",
				"rat": ""
			},
			"2019":{
				"nor": "",
				"rat": ""
			},
			"2020":{
				"nor": "",
				"rat": ""
			},
			"2021":{
				"nor": "",
				"rat": ""
			}
		},
		"phy2":{
			"2018":{
				"nor": "",
				"rat": ""
			},
			"2019":{
				"nor": "",
				"rat": ""
			},
			"2020":{
				"nor": "",
				"rat": ""
			},
			"2021":{
				"nor": "",
				"rat": ""
			}
		},
		"phy3":{
			"2018":{
				"nor": "",
				"rat": ""
			},
			"2019":{
				"nor": "",
				"rat": ""
			},
			"2020":{
				"nor": "",
				"rat": ""
			},
			"2021":{
				"nor": "",
				"rat": ""
			}
		}
	},
	"chi":{
		"chi1":{
			"2018":{
				"nor": "",
				"rat": ""
			},
			"2019":{
				"nor": "",
				"rat": ""
			},
			"2020":{
				"nor": "",
				"rat": ""
			},
			"2021":{
				"nor": "",
				"rat": ""
			}
		},
		"chi2":{
			"2018":{
				"nor": "",
				"rat": ""
			},
			"2019":{
				"nor": "",
				"rat": ""
			},
			"2020":{
				"nor": "",
				"rat": ""
			},
			"2021":{
				"nor": "",
				"rat": ""
			}
		},
		"chi3":{
			"2018":{
				"nor": "",
				"rat": ""
			},
			"2019":{
				"nor": "",
				"rat": ""
			},
			"2020":{
				"nor": "",
				"rat": ""
			},
			"2021":{
				"nor": "",
				"rat": ""
			}
		}
	}
}

let yearsList = [2018, 2019, 20200000];


var yearsDiv = document.getElementById('years');
cl(yearsDiv);

ylItem=(i)=> {
	return '<div class="div_c_h" class="center"><div class="center">'+String(i)+'</div><div class="div_c_h_1_time" class="center"><div>ٌR</div><div>N</div></div></div>'
}
let yearListString = "";

yearsList.map(writeYLS);

function writeYLS(i) {
	yearListString+= ylItem(i);
	cl(yearListString);
	cl(i);

}

yearsDiv.innerHTML = yearListString;


let a = '';

for ( p in data) {
console.log("1", p, data[p])
	cl("div of type");
	a = "<div class=\""+p+"\">";

    for(pp in data[p]) {
        console.log("2", pp, data[p][pp])
        cl("div of chapter", '<div class="div_c_row center">');

        a+= "<div class=\"div_c_row center\">";

        for(ppp in data[p][pp]) {
            console.log("3", ppp, data[p][pp][ppp]);
            cl("two div for year", '<div class="div_c_h" class="center">', '<div class="div_c_h_1_time" class="center">');

            a+= "<div class=\"div_c_h\" class=\"center\"><div class=\"div_c_h_1_time\" class=\"center\">";

            for(pppp in data[p][pp][ppp]) {
                console.log("4", pppp, data[p][pp][ppp][pppp]);
                cl("button with a attribute");
                a+="<div><a href=\"ayoub.pdf\" target=\"_blank\"><button>xx</button></a></div>";
            }
            a+="</div>";
            a+="</div>";
            
        }

        a+="<div class =\"div_c_h_3\" class=\"center\"><div class=\"div_c_h_1_time\" class=\"center\"><div>عنوان الدرس</div><div>2</div></div></div>";
        a+="</div>";

    }
    a+="</div>";
}
cl("aaa",a);


let xx = document.getElementById("xx");
cl(xx);
xx.innerHTML=a;
// xxString = '<div class="div_c_row center"><div class="div_c_h" class="center"><div class="div_c_h_1_time" class="center"><div>'+'<button>3_r</button>'+'</div><div>'+'<button>3_n</button>'+'</div></div></div><div class="div_c_h" class="center"><div class="div_c_h_1_time" class="center"><div><button>2_r</button></div><div><button>2_n</button></div></div></div><div class="div_c_h" class="center"><div class="div_c_h_1_time" class="center"><div><button>1_r</button></div><div><button>1_n</button></div></div></div><div class ="div_c_h_3" class="center"><div class="div_c_h_1_time" class="center"><div>عنوان الدرس</div><div>1</div></div></div></div>';
// xxString+=xxString+xxString+xxString+xxString;
// xx.innerHTML = xxString;

// <div class="div_c_row center">
// 	<div class="div_c_h" class="center">
// 		<div class="div_c_h_1_time" class="center">
// 			<div><button>3_r</button></div>
// 			<div><button style="visibility: hidden;">3_n</button></div>
// 		</div>
// 	</div>
// 	<div class="div_c_h" class="center">
// 		<div class="div_c_h_1_time" class="center">
// 			<div><button>2_r</button></div>
// 			<div><button>2_n</button></div>
// 		</div>
// 	</div>
// 	<div class="div_c_h" class="center">
// 		<div class="div_c_h_1_time" class="center">
// 			<div><button>1_r</button></div>
// 			<div><button style="visibility: hidden;">1_n</button></div>
// 		</div>
// 	</div>
// 	<div class ="div_c_h_3" class="center"><div class="div_c_h_1_time" class="center"><div>عنوان الدرس</div><div>2</div></div></div>
// </div>