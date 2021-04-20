package com.alibaba.otter.canal.admin.model;

import io.ebean.Finder;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "canal_adapter_ref")
public class AdapterRef {

    public static final AdapterRef.AdapterRefFinder find = new AdapterRef.AdapterRefFinder();

    public static class AdapterRefFinder extends Finder<Long, AdapterRef> {

        /**
         * Construct using the default EbeanServer.
         */
        public AdapterRefFinder() {
            super(AdapterRef.class);
        }

    }

    @Id
    private Long id;
    @Column(name = "adapter_id")
    private Long adapterId;
    @Column(name = "src_host")
    private String srcHost;
    @Column(name = "src_table")
    private String srcTable;
    @Column(name = "target_host")
    private String targetHost;
    @Column(name = "target_table")
    private String targetTable;
    private String status;
    private String topic;
    private String group;

    public static AdapterRefFinder getFind() {
        return find;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSrcHost() {
        return srcHost;
    }

    public void setSrcHost(String srcHost) {
        this.srcHost = srcHost;
    }

    public String getSrcTable() {
        return srcTable;
    }

    public void setSrcTable(String srcTable) {
        this.srcTable = srcTable;
    }

    public String getTargetHost() {
        return targetHost;
    }

    public void setTargetHost(String targetHost) {
        this.targetHost = targetHost;
    }

    public String getTargetTable() {
        return targetTable;
    }

    public void setTargetTable(String targetTable) {
        this.targetTable = targetTable;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getTopic() {
        return topic;
    }

    public void setTopic(String topic) {
        this.topic = topic;
    }

    public String getGroup() {
        return group;
    }

    public void setGroup(String group) {
        this.group = group;
    }

    public Long getAdapterId() {
        return adapterId;
    }

    public void setAdapterId(Long adapterId) {
        this.adapterId = adapterId;
    }
}
