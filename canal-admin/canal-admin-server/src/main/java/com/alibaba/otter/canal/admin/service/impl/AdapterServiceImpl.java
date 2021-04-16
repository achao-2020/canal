package com.alibaba.otter.canal.admin.service.impl;

import com.alibaba.otter.canal.admin.common.exception.ServiceException;
import com.alibaba.otter.canal.admin.model.Adapter;
import com.alibaba.otter.canal.admin.model.Pager;
import com.alibaba.otter.canal.protocol.SecurityUtil;
import io.ebean.Query;
import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Service;

import java.security.NoSuchAlgorithmException;
import java.util.List;
import java.util.Objects;

@Service("adapterService")
public class AdapterServiceImpl {
    public Pager<Adapter> findList(Adapter adapter, Pager<Adapter> pager) {
        Query<Adapter> query = getBaseQuery(adapter);
        Query<Adapter> queryCnt = query.copy();
        int count = queryCnt.findCount();
        pager.setCount((long) count);
        List<Adapter> adapters = query.order()
                .asc("id")
                .setFirstRow(pager.getOffset().intValue())
                .setMaxRows(pager.getSize())
                .findList();
        pager.setItems(adapters);
        if (adapters.isEmpty()) {
            return pager;
        }
        return pager;
    }

    private Query<Adapter> getBaseQuery(Adapter adapter) {
        Query<Adapter> query = Adapter.find.query();
//        query.fetch("canalCluster", "name").setDisableLazyLoading(true);
        if (adapter != null) {
            if (StringUtils.isNotEmpty(adapter.getName())) {
                query.where().like("name", "%" + adapter.getName() + "%");
            }
            if (StringUtils.isNotEmpty(adapter.getInstance())) {
                query.where().like("instance", "%" + adapter.getInstance() + "%");
            }
        }
        return query;
    }

    public void save(Adapter adapter) {
        adapter.setStatus("0");
        Query<Adapter> query = Adapter.find.query();
        if (query.where().eq("name", adapter.getName()).findOne() != null) {
            throw new ServiceException(adapter.getName() + "信息已存在");
        }
        adapter.insert();
    }

    public Adapter detail(Long id) {
        Adapter adapter = Adapter.find.byId(id);
        if (Objects.isNull(adapter)) {
            throw new ServiceException("adapter id" + id + "对应adapter不存在！");
        }
        return adapter;
    }

    public String delete(Long id) {
        Adapter.find.deleteById(id);
        return "success";
    }

    public String updateContent(Adapter adapter) {
        adapter.update("content");
        return "success";
    }
}
