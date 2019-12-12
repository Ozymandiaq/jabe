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
                        <div class="basketListDate">
                            <div class="basketListDateCity">
                                <div class="basketListCity gradient-title-2">Город:</div>
                                <div class="basketCity">Алматы</div>
                            </div>
                            <div class="basketListDateFrom">
                                <div class="basketListDateFromText">Дата от:</div>
                                <div class="datePicker"></div>
                                <!--DATE PICKER-->
                            </div>
                            <div class="basketListDateUntil">
                                <div class="basketListDateUntilText">Дата до:</div>
                                <div class="datePicker"></div>
                                <!--DATE PICKER-->
                            </div>
                        </div>
                        <div class="basketTable">
                            <table>
                                <tr>
                                    <td class="basketTitle whiteBorder">Наименование</td><td class="basketTitle whiteBorder">Сумма</td><td class="basketTitle"></td>
                                </tr>
                                <tr>
                                    <td class="basketItemTitle gradient-title-2">большое алматинское озеро</td><td class="gradient-title-2">450 $</td><td class="deleteBasketItemImg"><a href="#"><img src="/assets/img/deleteBasketItemImg.png" alt="img"></a></td>
                                </tr>
                                <tr>
                                    <td class="basketItemTitle gradient-title-2">Казино</td><td class="gradient-title-2">450 $</td><td class="deleteBasketItemImg"><a href="#"><img src="/assets/img/deleteBasketItemImg.png" alt="img"></a></td>
                                </tr>
                                <tr>
                                    <td class="basketItemTitle gradient-title-2">имиджевые мероприятия</td><td class="gradient-title-2">450 $</td><td class="deleteBasketItemImg"><a href="#"><img src="/assets/img/deleteBasketItemImg.png" alt="img"></a></td>
                                </tr>
                                <tr>
                                    <td class="basketItemTitle gradient-title-2">большое алматинское озеро</td><td class="gradient-title-2">450 $</td><td class="deleteBasketItemImg"><a href="#"><img src="/assets/img/deleteBasketItemImg.png" alt="img"></a></td>
                                </tr>
                                <tr>
                                    <td class="basketItemTitle gradient-title-2">Казино</td><td class="gradient-title-2">450 $</td><td class="deleteBasketItemImg"><a href="#"><img src="/assets/img/deleteBasketItemImg.png" alt="img"></a></td>
                                </tr>
                                <tr>
                                    <td class="basketItemTitle gradient-title-2">имиджевые мероприятия</td><td class="gradient-title-2">450 $</td><td class="deleteBasketItemImg"><a href="#"><img src="/assets/img/deleteBasketItemImg.png" alt="img"></a></td>
                                </tr>
                                <tr>
                                    <td class="basketItemTitle gradient-title-2">имиджевые мероприятия</td><td class="gradient-title-2">450 $</td><td class="deleteBasketItemImg"><a href="#"><img src="/assets/img/deleteBasketItemImg.png" alt="img"></a></td>
                                </tr>
                            </table>
                            <div class="basketTotal">
                                <div class="basketTotalItems">
                                    <div class="basketTotalItem gradient-title-2">Итого товаров:</div>
                                    <div class="basketTotalItem1">3</div>
                                </div>
                            </div>
                            <div class="basketTotal">
                                <div class="basketTotalItems">
                                    <div class="basketTotalItem gradient-title-2">Итого сумма:</div>
                                    <div class="basketTotalItemPrice">1 350 $</div>
                                </div>
                                <div class="basketTotalItems">
                                    <div class="checkImg"><img src="/assets/img/checkImg.png" alt="img"></div>
                                    <div class="basketTotalItem gradient-title-2">Сумма предоплаты:</div>
                                    <div class="basketTotalItemPrice">500 $</div>
                                </div>
                            </div>
                        </div>
                        <div class="basketTotalButton">
                            <button class="baksetButton brownBack noUpper">Оплатить</button>
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