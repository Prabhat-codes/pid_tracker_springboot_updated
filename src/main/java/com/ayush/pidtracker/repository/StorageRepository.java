package com.ayush.pidtracker.repository;


import com.ayush.pidtracker.entity.ImageData;
import org.springframework.data.domain.Example;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Transactional
public interface StorageRepository extends JpaRepository<ImageData,Long> {



    Optional<ImageData> findByName(String fileName);

    @Query("SELECT img from ImageData img WHERE img.user_id = ?1 AND img.reviewed = ?2")
    List<ImageData> findFilesForDev(String name , Boolean status);

    @Query("SELECT img from ImageData img WHERE img.reviewer_id = ?1 AND img.reviewed = ?2")
    List<ImageData> findFilesForRev(String name , Boolean status);

    @Query("SELECT img from ImageData img WHERE img.reviewed = ?1")
    List<ImageData> findFilesByStatus(Boolean status);


    @Modifying
    @Query("DELETE from ImageData img WHERE img.name=?1")
    int deleteFileByName(String fileName);





}
