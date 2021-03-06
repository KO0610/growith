package com.bit.growith.vo;

import java.sql.Timestamp;
import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.hibernate.annotations.CreationTimestamp;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class Teams {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long teamsId;
	
//	private Long teamsLeader;
	
//	@ManyToOne
//	@JoinColumn(name = "memberId")
//    private Member member;
	
	@Column(nullable = false, length = 30, unique = true)
	private String teamsName;
	
//	@Column(nullable = false, length = 10)
//	private String teamsStatus;
	
	@Column(nullable = false, length = 150)
	private String teamsDescription;

	@CreationTimestamp
	private LocalDate teamsInstDate;

	
	
}
