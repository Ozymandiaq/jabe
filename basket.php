<?php include 'header.php';?>
    <!DOCTYPE html>
    <html lang="en">
    
    <body>
        <!-- <img src="articles.jpg" class="test"> -->
        <section id="basket">

            <div class="topImg">
                <img src="/assets/img/basketTopImg.png" alt="img">
                <div></div>
            </div>

            <div class="title">
                <div class="hr"><hr></div>
                <div class="titleSpan gradient-title"><span>моя корзина</span></div>
                <div class="hr"><hr></div>
            </div>

            <div class="container">
                <div class="basketBox">
                    <div class="basketList">
                        <div class="basketTable">
                            <table>
                                <tr>
                                    <td>Наименование</td><td>Сумма</td><td></td>
                                </tr>
                                <tr>
                                    <td>большое алматинское озеро</td><td>450 $</td><td class="deleteBasketItemImg"><img src="/assets/img/deleteBasketItemImg.png" alt="img"></td>
                                </tr>
                            </table>
                        </div>

                    </div>


                    <div class="customerForm">
                        <form action="#" method="get">
                            <div>
                                <p class="gradient-title-2 basketFormStyle">Данные покупателя:</p>
                            </div>
                            <div>
                                <p class="gradient-title-2 basketFormStyle-2">Все поля помеченные * обязательны для заполнения</p>
                            </div>
                            <div>                                                     
                                <input tabindex="1" placeholder="Ваше имя" name="customerName" type="text">
                            </div>
                            <div>                                                     
                                <input tabindex="2" placeholder="Телефон" name="customerTel" type="tel">
                            </div>
                            <div>                                                     
                                <input tabindex="3" placeholder="e-mail" name="customerEmail" type="email">
                            </div>
                            <div>                                                     
                                <input tabindex="4" placeholder="Город" name="customerCity" type="text">
                            </div>
                            <div class="payRadio">
                                <div class="payMethodTitle">
                                    <p class="gradient-title-2 basketFormStyle">Способ оплаты</p>
                                </div>
                                <label class="payMethodLabel">Наличными(при оплате по приезду)
                                    <input tabindex="5" type="radio" checked="checked" name="payMethod" value="cash">
                                    <span class="checkmark"></span>
                                </label>
                                <label style="margin: 2em 0 2.5em;" class="payMethodLabel">Безналичный расчет (выставляется счет, оплата в течение 3 дней)
                                    <input tabindex="6" type="radio" name="payMethod" value="cashless">
                                    <span class="checkmark"></span>
                                </label>
                                <label class="payMethodLabel">Онлайн оплата картой (после согласования с менеджером)
                                    <input tabindex="7" type="radio" name="payMethod" value="card">
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                            <button class="baksetFormButton brownBack noUpper" tabindex="8" type="submit">Оформить заказ</button>
                        </form>
                    </div>

                </div>
            
        </section>





</body>
    </html>

<?php include 'footer.php';?>