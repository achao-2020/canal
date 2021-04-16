package com.alibaba.otter.canal.admin.model;

import io.ebean.Finder;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "canal_adapter_config")
public class Adapter extends Model {

    public static final Adapter.AdapterFinder find = new Adapter.AdapterFinder();

    public static class AdapterFinder extends Finder<Long, Adapter> {

        /**
         * Construct using the default EbeanServer.
         */
        public AdapterFinder(){
            super(Adapter.class);
        }

    }

    @Id
    private Long id;
    private String name;
    private String category;
    private String instance;
    private String status;
    private String content;
    private Date modifiedTime;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Date getModifiedTime() {
        return modifiedTime;
    }

    public void setModifiedTime(Date modifiedTime) {
        this.modifiedTime = modifiedTime;
    }

    public static AdapterFinder getFind() {
        return find;
    }

    public String getInstance() {
        return instance;
    }

    public void setInstance(String instance) {
        this.instance = instance;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }
}
