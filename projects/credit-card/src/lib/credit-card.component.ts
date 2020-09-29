import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
declare var $: any;
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'lib-credit-card',
  template: `
  <div class="row">
  <div class="container">
    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
      <div class="col1">
        <div class="card">
          <div class="front">
            <div class="type">
              <img class="bankid" />
            </div>
            <span class="chip"></span>
            <span class="card_number">&#x25CF;&#x25CF;&#x25CF;&#x25CF; &#x25CF;&#x25CF;&#x25CF;&#x25CF; &#x25CF;&#x25CF;&#x25CF;&#x25CF; &#x25CF;&#x25CF;&#x25CF;&#x25CF; </span>
            <div class="date"><span class="date_value">MM / YYYY</span></div>
            <span class="fullname">FULL NAME</span>
          </div>
          <div class="back">
            <div class="magnetic"></div>
            <div class="bar"></div>
            <span class="seccode">&#x25CF;&#x25CF;&#x25CF;</span>
            <span class="chip"></span><span class="disclaimer">This card is property of Random Bank of Random corporation. <br> If found please return to Random Bank of Random corporation - 21968 Paris, Verdi Street, 34 </span>
          </div>
        </div>
      </div>
    </div>
      <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col2">
     
          <form [formGroup]="tdcForm">
            <label>Card Number</label>
            <input class="number" formControlName="cardNumber" type="text" ng-model="ncard" maxlength="19" onkeypress='return event.charCode >= 48 && event.charCode <= 57' />
            <label>Cardholder name</label>
            <input class="inputname" formControlName="cardholderName" type="text" placeholder="" />
            <label>Expiry date</label>
            <input class="expire"  formControlName="expiryDate"  type="text" placeholder="MM / YYYY" />
            <label>Security Number</label>
            <input class="ccv" formControlName="securityNumber" type="text" placeholder="CVC" maxlength="3" onkeypress='return event.charCode >= 48 && event.charCode <= 57' />
          </form>
              
      </div>
    </div>

  </div>
  `,
  styles: ["@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500');*{margin: 0;box-sizing: border-box;} html{ --card-color: #cacaca; --text-color: #e1e1e1;} body{font-family: 'Roboto', sans-serif;}.tips{position: fixed;bottom: 0;width: 100%;height: 30px;background: #f1f1f1;line-height: 30px;font-size: 14px;padding: 2px 15px;} .container{position: absolute;display: flex;flex-direction: row;align-items: center;margin: auto;top: 0;bottom: 0;left: 0;right: 0;width: 680px;}   .col1{perspective: 1000;transform-style: preserve-3d;} .card{position: relative;width: 420px;height: 250px;margin-bottom: 85px;margin-right: 10px;border-radius: 17px;box-shadow: 0 5px 20px -5px rgba(0,0,0,0.1);transition: all 1s;transform-style: preserve-3d;} .front{position: absolute;background: var(--card-color);border-radius: 17px;padding: 50px;width: 100%;height: 100%;transform: translateZ(1px);-webkit-transform: translateZ(1px);transition: background 0.3s;z-index: 50;background-image: repeating-linear-gradient(45deg, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.04) 3px, rgba(255, 255, 255, 0.05) 4px), -webkit-linear-gradient(-245deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.2) 70%, rgba(255, 255, 255, 0) 90%);-webkit-backface-visibility: hidden;-moz-backface-visibility: hidden;-ms-backface-visibility: hidden;backface-visibility: hidden;} .type{position: absolute;width: 75px;height: 45px;top: 20px;right: 20px;} img{width: 100%;float: right;} .card_number{position: absolute;font-size: 26px;font-weight: 500;letter-spacing: -1px;top: 110px;color: var(--text-color);word-spacing: 3px;transition: color 0.5s;} .date{position: absolute; bottom: 40px;right: 55px;width: 90px;height: 35px;color: var(--text-color);transition: color 0.5s;} .date_value{font-size: 12px;position: absolute;margin-left: 22px;margin-top: 12px;color: var(--text-color);font-weight: 500;transition: color 0.5s;} .date::after{content: 'MONTH / YEAR';position: absolute;display: block;font-size: 7px;margin-left: 20px;} &:before{content: ' valid \A thru';position: absolute;display: block;font-size: 8px;white-space: pre;margin-top: 8px;} .fullname{position: absolute;font-size: 20px;bottom: 40px;width: 225px;color: var(--text-color);transition: color 0.5s;} .back{position: absolute;width: 100%;border-radius: 17px;height: 100%;background: var(--card-color);transform: rotateY(180deg);} .magnetic{position: absolute;width: 100%;height: 50px;background: rgba(0,0,0,0.7);margin-top: 25px;} .bar{position: absolute;width: 80%;height: 37px;background: rgba(255,255,255,0.7);left: 10px;margin-top: 100px;} .seccode{font-size: 13px;color: var(--text-color);font-weight: 500;position: absolute;top: 100px;right: 40px;} .back .chip{bottom: 45px;left: 10px;} .disclaimer{position: absolute;width: 65%;left: 80px;color: #f1f1f1;font-size: 8px;bottom: 55px;}  .col2{margin-bottom: 85px; }     input{display: block;width: 260px;height: 30px;padding-left: 10px;padding-top: 3px;padding-bottom: 3px;margin: 7px;font-size: 17px;border-radius: 20px;background: rgba(0,0,0,0.05);border: none;transition: background 0.5s;} &:focus{outline-width: 0;background: rgba(31,134,252, 0.15);transition: background 0.5s;}    label{padding-left: 8px;font-size: 15px;color: #444;}.ccv{width: 40%;}  .chip{position: absolute;width: 55px;height: 40px;background: #bbb;border-radius: 7px;} .chip::after{content: '';display: block;width: 35px;height: 25px;border-radius: 4px;position: absolute;top: 0;bottom: 0;margin: auto;background: #ddd;}   .buy{width: 260px;height: 50px;position: relative;display: block;margin: 20px auto;border-radius: 10px;border: none;background: #42C2DF;color: white;font-size: 20px;transition: background 0.4s;cursor: pointer;} i{font-size: 20px;}&:hover{background: #42C2DF;transition: background 0.4s;}"]
})
export class CreditCardComponent implements OnInit {
  @Input() cards: string;
  @Output() returnCard = new EventEmitter();

  public disabled: boolean = false;
  public tdcForm: FormGroup;
  public valuesCard: any;
  public company: any;
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.tdcForm = this.formBuilder.group({
      cardNumber: ['', Validators.required],
      cardholderName: ['', Validators.required],
      expiryDate: ['', Validators.required],
      securityNumber: ['', Validators.required],
    });
    this.editCard(this.cards);

    this.tdcForm.valueChanges.subscribe((data: any) => {
      this.returnCard.emit(data);
    })

  }

  get f() {
    return this.tdcForm.controls;
  }

  public resetColorTCD(): void {

  }

  public searchCompany() {
    var number = $(".number").val();
    var selected_card = -1;

    if (
      parseInt(number.substring(0, 2)) > 50 &&
      parseInt(number.substring(0, 2)) < 56
    ) {
      selected_card = 0;
    } else if (parseInt(number.substring(0, 1)) == 4) {
      selected_card = 1;
    } else if (
      parseInt(number.substring(0, 2)) == 36 ||
      parseInt(number.substring(0, 2)) == 38 ||
      parseInt(number.substring(0, 2)) == 39
    ) {
      selected_card = 2;
    } else if (
      parseInt(number.substring(0, 2)) == 34 ||
      parseInt(number.substring(0, 2)) == 37
    ) {
      selected_card = 3;
    } else if (parseInt(number.substring(0, 2)) == 65) {
      selected_card = 4;
    } else if (parseInt(number.substring(0, 4)) == 5019) {
      selected_card = 5;
    } else {
      selected_card = -1;
    }

    return (selected_card != -1) ? this.cards[selected_card] : "";

  }

  public editCard(cards): void {
    // 4: VISA, 51 -> 55: MasterCard, 36-38-39: DinersClub, 34-37: American Express, 65: Discover, 5019: dankort
    var html = document.getElementsByTagName("html")[0];
    html.setAttribute(
      "style",
      "--card-color: #cacaca",
    );
    $(function () {
      var month = 0;
      var html = document.getElementsByTagName("html")[0];
      var number = "";

      var selected_card = -1;

      $(document).click(function (e) {
        if (!$(e.target).is(".ccv") || !$(e.target).closest(".ccv").length) {
          $(".card").css("transform", "rotatey(0deg)");
          $(".seccode").css("color", "var(--text-color)");
        }
        if (!$(e.target).is(".expire") || !$(e.target).closest(".expire").length) {
          $(".date_value").css("color", "var(--text-color)");
        }
        if (!$(e.target).is(".number") || !$(e.target).closest(".number").length) {
          $(".card_number").css("color", "var(--text-color)");
        }
        if (
          !$(e.target).is(".inputname") ||
          !$(e.target).closest(".inputname").length
        ) {
          $(".fullname").css("color", "var(--text-color)");
        }
      });

      //Card number input
      $(".number")
        .keyup(function (event) {
          $(".card_number").text($(this).val());
          number = $(this).val();
          if (
            parseInt(number.substring(0, 2)) > 50 &&
            parseInt(number.substring(0, 2)) < 56
          ) {
            selected_card = 0;
          } else if (parseInt(number.substring(0, 1)) == 4) {
            selected_card = 1;
          } else if (
            parseInt(number.substring(0, 2)) == 36 ||
            parseInt(number.substring(0, 2)) == 38 ||
            parseInt(number.substring(0, 2)) == 39
          ) {
            selected_card = 2;
          } else if (
            parseInt(number.substring(0, 2)) == 34 ||
            parseInt(number.substring(0, 2)) == 37
          ) {
            selected_card = 3;
          } else if (parseInt(number.substring(0, 2)) == 65) {
            selected_card = 4;
          } else if (parseInt(number.substring(0, 4)) == 5019) {
            selected_card = 5;
          } else {
            selected_card = -1;
          }

          if (selected_card != -1) {
            html.setAttribute(
              "style",
              "--card-color: " + cards[selected_card].color
            );
            $(".bankid").attr("src", cards[selected_card].src).show();
            this.company = cards[selected_card].nome;
          } else {
            html.setAttribute("style", "--card-color: #cecece");
            $(".bankid").attr("src", "").hide();
          }

          if ($(".card_number").text().length === 0) {
            $(".card_number").html(
              "&#x25CF;&#x25CF;&#x25CF;&#x25CF; &#x25CF;&#x25CF;&#x25CF;&#x25CF; &#x25CF;&#x25CF;&#x25CF;&#x25CF; &#x25CF;&#x25CF;&#x25CF;&#x25CF;"
            );
          }
        })
        .focus(function () {
          $(".card_number").css("color", "white");
        })
        .on("keydown input", function (event) {
          $(".card_number").text($(this).val());
          if (event.key >= 0 && event.key <= 9) {
            if (
              $(this).val().length === 4 ||
              $(this).val().length === 9 ||
              $(this).val().length === 14
            ) {
              $(this).val($(this).val() + " ");
            }
          }
        });

      //Name Input
      $(".inputname")
        .keyup(function (event) {
          $(".fullname").text($(this).val());
          if ($(".inputname").val().length === 0) {
            $(".fullname").text("FULL NAME");
          }
          return event.charCode;
        })
        .focus(function () {
          $(".fullname").css("color", "white");
        });

      $(".inputname").on("input", function () {
        var regexp = /[^a-zA-Z áéíóúüñ ÁÉÍÓÚüÑ.]/g;
        if ($(this).val().match(regexp)) {
          $(this).val($(this).val().replace(regexp, ''));
        }
      });

      //Security code Input
      $(".ccv")
        .focus(function () {
          $(".card").css("transform", "rotatey(180deg)");
          $(".seccode").css("color", "white");
        })
        .keyup(function () {
          $(".seccode").text($(this).val());
          if ($(this).val().length === 0) {
            $(".seccode").html("&#x25CF;&#x25CF;&#x25CF;");
          }
        })
        .focusout(function () {
          $(".card").css("transform", "rotatey(0deg)");
          $(".seccode").css("color", "var(--text-color)");
        });

      //Date expire input
      $(".expire")
        .keypress(function (event) {
          if (event.charCode >= 48 && event.charCode <= 57) {
            if ($(this).val().length === 1) {
              $(this).val($(this).val() + event.key + " / ");
            } else if ($(this).val().length === 0) {
              if (event.key == 1 || event.key == 0) {
                month = event.key;
                return event.charCode;
              } else {
                $(this).val(0 + event.key + " / ");
              }
            } else if ($(this).val().length > 2 && $(this).val().length < 9) {
              return event.charCode;
            }
          }
          return false;
        })
        .keyup(function (event) {
          $(".date_value").html($(this).val());
          if (event.keyCode == 8 && $(".expire").val().length == 4) {
            $(this).val(month);
          }

          if ($(this).val().length === 0) {
            $(".date_value").text("MM / YYYY");
          }
        })
        .keydown(function () {
          $(".date_value").html($(this).val());
        })
        .focus(function () {
          $(".date_value").css("color", "white");
        });
    });
  }
}
