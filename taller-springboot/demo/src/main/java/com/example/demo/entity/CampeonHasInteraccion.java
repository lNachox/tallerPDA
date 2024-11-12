package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Entity
@Data
public class CampeonHasInteraccion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "campeon_id_campeon")
    private Campeon campeon;

    @ManyToOne
    @JoinColumn(name = "campeon_counter_id_counter")
    private Counter counter;

    @ManyToOne
    @JoinColumn(name = "interaccion_id_interaccion")
    private Interaccion interaccion;
}
