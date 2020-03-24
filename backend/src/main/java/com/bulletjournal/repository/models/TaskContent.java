package com.bulletjournal.repository.models;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;

@Entity
@Table(name = "task_contents")
public class TaskContent extends ContentModel<Task> {
    @Id
    @GeneratedValue(generator = "task_content_generator")
    @SequenceGenerator(
            name = "task_content_generator",
            sequenceName = "task_content_sequence",
            initialValue = 200
    )
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "task_id", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Task task;

    @Override
    public Long getId() {
        return id;
    }

    @Override
    public Task getProjectItem() {
        return getTask();
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Task getTask() {
        return task;
    }

    public void setTask(Task task) {
        this.task = task;
    }
}