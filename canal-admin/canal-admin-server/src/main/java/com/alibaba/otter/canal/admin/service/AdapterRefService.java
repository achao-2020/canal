package com.alibaba.otter.canal.admin.service;

import com.alibaba.otter.canal.admin.model.Adapter;
import com.alibaba.otter.canal.admin.model.AdapterRef;
import com.alibaba.otter.canal.admin.model.Pager;
import io.ebean.Query;
import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("adapterRefService")
public class AdapterRefService {

    /**
     * 传递adapter关联id查找同步表
     * @param adapterRef
     * @param pager
     * @return
     */
    public Pager<AdapterRef> findList(AdapterRef adapterRef, Pager<AdapterRef> pager) {
        Query<AdapterRef> query = getQuery(adapterRef);
        Query<AdapterRef> queryCnt = query.copy();
        int count = queryCnt.findCount();
        pager.setCount((long) count);
        List<AdapterRef> list = query.order()
                .asc("id")
                .setFirstRow(pager.getOffset().intValue())
                .setMaxRows(pager.getSize())
                .findList();
        pager.setItems(list);
        return pager;
    }

    private Query<AdapterRef> getQuery(AdapterRef adapterRef) {
        Query<AdapterRef> query = AdapterRef.find.query();
        if (adapterRef.getAdapterId() != null) {
            query.where().eq("adapter_id", adapterRef.getAdapterId());
        }
        if (StringUtils.isNotBlank(adapterRef.getSrcHost())) {
            query.where().eq("src_host", adapterRef.getSrcHost());
        }
        if (StringUtils.isNotBlank(adapterRef.getSrcTable())) {
            query.where().eq("src_table", adapterRef.getSrcTable());
        }
        if (StringUtils.isNotBlank(adapterRef.getTargetHost())) {
            query.where().eq("target_host", adapterRef.getTargetHost());
        }
        if (StringUtils.isNotBlank(adapterRef.getTargetTable())) {
            query.where().eq("target_table", adapterRef.getTargetTable());
        }
        if (StringUtils.isNotBlank(adapterRef.getGroup())) {
            query.where().eq("group", adapterRef.getGroup());
        }
        return query;
    }
}
