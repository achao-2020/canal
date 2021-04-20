package com.alibaba.otter.canal.admin.controller;

import com.alibaba.otter.canal.admin.common.TemplateConfigLoader;
import com.alibaba.otter.canal.admin.model.Adapter;
import com.alibaba.otter.canal.admin.model.AdapterRef;
import com.alibaba.otter.canal.admin.model.BaseModel;
import com.alibaba.otter.canal.admin.model.Pager;
import com.alibaba.otter.canal.admin.service.AdapterRefService;
import com.alibaba.otter.canal.admin.service.AdapterService;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;

@RestController
@RequestMapping("/api/{env}/")
public class CanalAdapterController {
    @Resource
    private AdapterService adapterService;

    @Resource
    private AdapterRefService adapterRefService;

    /**
     * 获取全部的adapter信息
     * @param adapter
     * @param pager
     * @return
     */
    @GetMapping("/canalAdapter")
    public BaseModel<Pager<Adapter>> adapters(Adapter adapter, Pager<Adapter> pager, @PathVariable String env) {
        return BaseModel.getInstance(adapterService.findList(adapter, pager));
    }

    @GetMapping(value = "/adapter/template")
    public BaseModel<String> template(@PathVariable String env) {
        return BaseModel.getInstance(TemplateConfigLoader.loadAdapterConfig());
    }

    @PostMapping(value = "/addCanalAdapter")
    public BaseModel<String> save(@RequestBody Adapter adapter, @PathVariable String env) {
        adapterService.save(adapter);
        return BaseModel.getInstance("success");
    }

    @GetMapping(value = "/canalAdapterDetail/{id}")
    public BaseModel<Adapter> detail(@PathVariable Long id, @PathVariable String env) {
        return BaseModel.getInstance(adapterService.detail(id));
    }

    @GetMapping(value = "/deleteAdapter/{id}")
    public BaseModel<String> delete(@PathVariable Long id, @PathVariable String env) {
        return BaseModel.getInstance(adapterService.delete(id));
    }

    @PostMapping(value = "/updateCanalAdapter")
    public BaseModel<String> updateContent(@RequestBody Adapter adapter, @PathVariable String env) {
        return BaseModel.getInstance(adapterService.updateContent(adapter));
    }

    @PutMapping("/adapterStatus/{id}")
    public BaseModel<Boolean> adapterStatus(@PathVariable Long id, @RequestParam() String option, @PathVariable String env) {
        return BaseModel.getInstance(adapterService.adapterStatus(id, option));
    }

    @GetMapping("/adapterRefTables")
    public BaseModel<Pager<AdapterRef>> adapterRefTables(AdapterRef adapterRef, Pager<AdapterRef> pager, @PathVariable String env) {
        return BaseModel.getInstance(adapterRefService.findList(adapterRef, pager));
    }
}
