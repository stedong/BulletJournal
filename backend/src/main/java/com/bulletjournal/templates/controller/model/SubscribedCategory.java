package com.bulletjournal.templates.controller.model;

import com.bulletjournal.controller.models.Project;
import com.google.gson.annotations.Expose;

public class SubscribedCategory {

    @Expose
    private Category category;

    @Expose
    private Selection selection;

    @Expose
    private Project project;

    public SubscribedCategory(Category category, Selection selection, Project project) {
        this.category = category;
        this.selection = selection;
        this.project = project;
    }

    @Override
    public String toString() {
        return "SubscribedCategory{" +
            ", category=" + category +
            ", selection=" + selection +
            ", project=" + project +
            '}';
    }
}
