package com.example.lab4.DTO;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

@Data
@NoArgsConstructor
public class RadiusDTO {
    @NonNull
    private double r;
}
