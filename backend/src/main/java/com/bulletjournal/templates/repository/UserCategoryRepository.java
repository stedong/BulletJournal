package com.bulletjournal.templates.repository;

import com.bulletjournal.repository.models.User;
import com.bulletjournal.templates.repository.model.UserCategory;
import com.bulletjournal.templates.repository.model.UserCategoryKey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserCategoryRepository extends JpaRepository<UserCategory, UserCategoryKey> {

    List<UserCategory> getAllByUser(User user);
}
