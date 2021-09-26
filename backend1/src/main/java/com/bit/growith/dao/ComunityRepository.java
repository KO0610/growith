package com.bit.growith.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bit.growith.vo.Comunity;

@Repository
public interface ComunityRepository extends JpaRepository<Comunity, Long>{

}
