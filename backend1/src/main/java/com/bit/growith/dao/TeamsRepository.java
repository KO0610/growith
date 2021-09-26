package com.bit.growith.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bit.growith.vo.Teams;

@Repository
public interface TeamsRepository extends JpaRepository<Teams, Long>{

}
