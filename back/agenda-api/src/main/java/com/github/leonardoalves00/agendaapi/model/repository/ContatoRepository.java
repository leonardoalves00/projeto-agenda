package com.github.leonardoalves00.agendaapi.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.github.leonardoalves00.agendaapi.model.entity.Contato;

public interface ContatoRepository extends JpaRepository<Contato, Integer>{

	
}
