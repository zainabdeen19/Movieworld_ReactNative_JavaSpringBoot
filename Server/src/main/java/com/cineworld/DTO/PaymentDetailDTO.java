package com.movieworld.DTO;

import lombok.Data;

@Data
public class PaymentDetailDTO {

    private String cardNumber;
    private String cardHolderName;
    private String expiryDate;
    private String cvv;

}
 
