var sourcesIndex = JSON.parse('{\
"gdk4":["",[["auto",[],["app_launch_context.rs","button_event.rs","cairo_context.rs","clipboard.rs","content_deserializer.rs","content_formats.rs","content_formats_builder.rs","content_provider.rs","content_serializer.rs","crossing_event.rs","cursor.rs","delete_event.rs","device.rs","device_pad.rs","device_tool.rs","display.rs","display_manager.rs","dnd_event.rs","drag.rs","drag_surface.rs","draw_context.rs","drop.rs","enums.rs","event.rs","event_sequence.rs","file_list.rs","flags.rs","focus_event.rs","frame_clock.rs","frame_timings.rs","functions.rs","gl_context.rs","gl_texture.rs","grab_broken_event.rs","key_event.rs","memory_texture.rs","mod.rs","monitor.rs","motion_event.rs","pad_event.rs","paintable.rs","popup.rs","popup_layout.rs","proximity_event.rs","rectangle.rs","rgba.rs","scroll_event.rs","seat.rs","snapshot.rs","surface.rs","texture.rs","texture_downloader.rs","toplevel.rs","toplevel_layout.rs","touch_event.rs","touchpad_event.rs","vulkan_context.rs"]],["subclass",[],["content_provider.rs","mod.rs","paintable.rs"]]],["builders.rs","button_event.rs","cairo_interaction.rs","clipboard.rs","content_deserializer.rs","content_formats.rs","content_formats_builder.rs","content_provider.rs","content_serializer.rs","crossing_event.rs","delete_event.rs","display.rs","dnd_event.rs","draw_context.rs","drop.rs","event.rs","focus_event.rs","functions.rs","gl_texture.rs","grab_broken_event.rs","key_event.rs","keymap_key.rs","keys.rs","lib.rs","motion_event.rs","pad_event.rs","popup_layout.rs","prelude.rs","proximity_event.rs","rectangle.rs","rgba.rs","scroll_event.rs","surface.rs","texture.rs","time_coord.rs","toplevel.rs","toplevel_size.rs","touch_event.rs","touchpad_event.rs"]],\
"gdk4_sys":["",[],["lib.rs"]],\
"gdk4_wayland":["",[["auto",[],["mod.rs","wayland_device.rs","wayland_display.rs","wayland_gl_context.rs","wayland_monitor.rs","wayland_popup.rs","wayland_seat.rs","wayland_surface.rs","wayland_toplevel.rs"]]],["lib.rs","prelude.rs","wayland_device.rs","wayland_display.rs","wayland_monitor.rs","wayland_seat.rs","wayland_surface.rs"]],\
"gdk4_wayland_sys":["",[],["lib.rs"]],\
"gdk4_win32":["",[["auto",[],["enums.rs","mod.rs","win32_display.rs","win32_display_manager.rs","win32_drag.rs","win32_gl_context.rs","win32_hcursor.rs","win32_monitor.rs","win32_screen.rs","win32_surface.rs"]]],["lib.rs","prelude.rs","rt.rs","win32_display.rs","win32_hcursor.rs","win32_surface.rs"]],\
"gdk4_win32_sys":["",[],["lib.rs"]],\
"gdk4_x11":["",[["auto",[],["enums.rs","functions.rs","mod.rs","x11_app_launch_context.rs","x11_device_manager_xi2.rs","x11_device_xi2.rs","x11_display.rs","x11_drag.rs","x11_monitor.rs","x11_screen.rs","x11_surface.rs","x11gl_context.rs"]]],["builders.rs","functions.rs","lib.rs","prelude.rs","rt.rs","x11_display.rs","x11_monitor.rs","x11_screen.rs","x11_surface.rs"]],\
"gdk4_x11_sys":["",[],["lib.rs"]],\
"gsk4":["",[["auto",[],["blend_node.rs","blur_node.rs","border_node.rs","broadway_renderer.rs","cairo_node.rs","cairo_renderer.rs","clip_node.rs","color_matrix_node.rs","color_node.rs","conic_gradient_node.rs","container_node.rs","cross_fade_node.rs","debug_node.rs","enums.rs","gl_renderer.rs","gl_shader.rs","gl_shader_node.rs","inset_shadow_node.rs","linear_gradient_node.rs","mask_node.rs","mod.rs","opacity_node.rs","outset_shadow_node.rs","radial_gradient_node.rs","render_node.rs","renderer.rs","repeat_node.rs","repeating_linear_gradient_node.rs","repeating_radial_gradient_node.rs","rounded_clip_node.rs","shader_args_builder.rs","shadow_node.rs","text_node.rs","texture_node.rs","texture_scale_node.rs","transform.rs","transform_node.rs"]]],["blend_node.rs","blur_node.rs","border_node.rs","builders.rs","cairo_node.rs","clip_node.rs","color_matrix_node.rs","color_node.rs","color_stop.rs","conic_gradient_node.rs","container_node.rs","cross_fade_node.rs","debug_node.rs","gl_shader.rs","gl_shader_node.rs","inset_shadow_node.rs","lib.rs","linear_gradient_node.rs","mask_node.rs","ngl_renderer.rs","opacity_node.rs","outset_shadow_node.rs","parse_location.rs","prelude.rs","radial_gradient_node.rs","render_node.rs","repeat_node.rs","repeating_linear_gradient_node.rs","repeating_radial_gradient_node.rs","rounded_clip_node.rs","rounded_rect.rs","shadow.rs","shadow_node.rs","text_node.rs","texture_node.rs","texture_scale_node.rs","transform.rs","transform_node.rs"]],\
"gsk4_sys":["",[],["lib.rs"]],\
"gtk4":["",[["auto",[],["about_dialog.rs","accessible.rs","accessible_range.rs","action_bar.rs","actionable.rs","activate_action.rs","adjustment.rs","alert_dialog.rs","alias.rs","alternative_trigger.rs","any_filter.rs","app_chooser.rs","app_chooser_button.rs","app_chooser_dialog.rs","app_chooser_widget.rs","application.rs","application_window.rs","aspect_frame.rs","assistant.rs","assistant_page.rs","at_context.rs","bin_layout.rs","bitset.rs","bookmark_list.rs","bool_filter.rs","box_.rs","box_layout.rs","buildable.rs","builder.rs","builder_list_item_factory.rs","builder_scope.rs","button.rs","calendar.rs","callback_action.rs","cell_area.rs","cell_area_box.rs","cell_area_context.rs","cell_editable.rs","cell_layout.rs","cell_renderer.rs","cell_renderer_accel.rs","cell_renderer_combo.rs","cell_renderer_pixbuf.rs","cell_renderer_progress.rs","cell_renderer_spin.rs","cell_renderer_spinner.rs","cell_renderer_text.rs","cell_renderer_toggle.rs","cell_view.rs","center_box.rs","center_layout.rs","check_button.rs","closure_expression.rs","color_button.rs","color_chooser.rs","color_chooser_dialog.rs","color_chooser_widget.rs","color_dialog.rs","color_dialog_button.rs","column_view.rs","column_view_column.rs","column_view_sorter.rs","combo_box.rs","combo_box_text.rs","constant_expression.rs","constants.rs","constraint.rs","constraint_guide.rs","constraint_layout.rs","constraint_layout_child.rs","constraint_target.rs","css_provider.rs","css_section.rs","custom_filter.rs","custom_sorter.rs","dialog.rs","directory_list.rs","drag_icon.rs","drag_source.rs","drawing_area.rs","drop_controller_motion.rs","drop_down.rs","drop_target.rs","drop_target_async.rs","editable.rs","editable_label.rs","emoji_chooser.rs","entry.rs","entry_buffer.rs","entry_completion.rs","enums.rs","event_controller.rs","event_controller_focus.rs","event_controller_key.rs","event_controller_legacy.rs","event_controller_motion.rs","event_controller_scroll.rs","every_filter.rs","expander.rs","expression.rs","file_chooser.rs","file_chooser_dialog.rs","file_chooser_native.rs","file_chooser_widget.rs","file_dialog.rs","file_filter.rs","file_launcher.rs","filter.rs","filter_list_model.rs","fixed.rs","fixed_layout.rs","fixed_layout_child.rs","flags.rs","flatten_list_model.rs","flow_box.rs","flow_box_child.rs","font_button.rs","font_chooser.rs","font_chooser_dialog.rs","font_chooser_widget.rs","font_dialog.rs","font_dialog_button.rs","frame.rs","functions.rs","gesture.rs","gesture_click.rs","gesture_drag.rs","gesture_long_press.rs","gesture_pan.rs","gesture_rotate.rs","gesture_single.rs","gesture_stylus.rs","gesture_swipe.rs","gesture_zoom.rs","gl_area.rs","grid.rs","grid_layout.rs","grid_layout_child.rs","grid_view.rs","header_bar.rs","icon_paintable.rs","icon_theme.rs","icon_view.rs","im_context.rs","im_context_simple.rs","im_multicontext.rs","image.rs","info_bar.rs","inscription.rs","label.rs","layout_child.rs","layout_manager.rs","level_bar.rs","link_button.rs","list_base.rs","list_box.rs","list_box_row.rs","list_item.rs","list_item_factory.rs","list_store.rs","list_view.rs","lock_button.rs","map_list_model.rs","media_controls.rs","media_file.rs","media_stream.rs","menu_button.rs","message_dialog.rs","mnemonic_action.rs","mod.rs","mount_operation.rs","multi_filter.rs","multi_selection.rs","multi_sorter.rs","named_action.rs","native.rs","native_dialog.rs","never_trigger.rs","no_selection.rs","notebook.rs","notebook_page.rs","nothing_action.rs","numeric_sorter.rs","object_expression.rs","orientable.rs","overlay.rs","overlay_layout.rs","overlay_layout_child.rs","pad_controller.rs","page_setup.rs","page_setup_unix_dialog.rs","paned.rs","paper_size.rs","param_spec_expression.rs","password_entry.rs","password_entry_buffer.rs","picture.rs","popover.rs","popover_menu.rs","popover_menu_bar.rs","print_context.rs","print_job.rs","print_operation.rs","print_operation_preview.rs","print_settings.rs","print_unix_dialog.rs","printer.rs","progress_bar.rs","property_expression.rs","range.rs","recent_info.rs","recent_manager.rs","requisition.rs","revealer.rs","root.rs","scale.rs","scale_button.rs","scrollable.rs","scrollbar.rs","scrolled_window.rs","search_bar.rs","search_entry.rs","selection_filter_model.rs","selection_model.rs","separator.rs","settings.rs","shortcut.rs","shortcut_action.rs","shortcut_controller.rs","shortcut_label.rs","shortcut_manager.rs","shortcut_trigger.rs","shortcuts_group.rs","shortcuts_section.rs","shortcuts_shortcut.rs","shortcuts_window.rs","signal_action.rs","signal_list_item_factory.rs","single_selection.rs","size_group.rs","slice_list_model.rs","snapshot.rs","sort_list_model.rs","sorter.rs","spin_button.rs","spinner.rs","stack.rs","stack_page.rs","stack_sidebar.rs","stack_switcher.rs","statusbar.rs","string_filter.rs","string_list.rs","string_object.rs","string_sorter.rs","style_context.rs","style_provider.rs","switch.rs","symbolic_paintable.rs","text.rs","text_buffer.rs","text_child_anchor.rs","text_iter.rs","text_mark.rs","text_tag.rs","text_tag_table.rs","text_view.rs","toggle_button.rs","tooltip.rs","tree_drag_dest.rs","tree_drag_source.rs","tree_expander.rs","tree_iter.rs","tree_list_model.rs","tree_list_row.rs","tree_list_row_sorter.rs","tree_model.rs","tree_model_filter.rs","tree_model_sort.rs","tree_path.rs","tree_row_reference.rs","tree_selection.rs","tree_sortable.rs","tree_store.rs","tree_view.rs","tree_view_column.rs","uri_launcher.rs","video.rs","viewport.rs","volume_button.rs","widget.rs","widget_paintable.rs","window.rs","window_controls.rs","window_group.rs","window_handle.rs"]],["subclass",[],["accessible_range.rs","actionable.rs","adjustment.rs","application.rs","application_window.rs","box_.rs","buildable.rs","builder_scope.rs","button.rs","cell_area.rs","cell_area_context.rs","cell_editable.rs","cell_layout.rs","cell_renderer.rs","cell_renderer_text.rs","check_button.rs","color_chooser.rs","combo_box.rs","constraint_target.rs","dialog.rs","drawing_area.rs","editable.rs","entry.rs","entry_buffer.rs","filter.rs","fixed.rs","flow_box_child.rs","font_chooser.rs","frame.rs","gl_area.rs","grid.rs","im_context.rs","layout_child.rs","layout_manager.rs","list_box_row.rs","media_file.rs","media_stream.rs","mod.rs","native.rs","native_dialog.rs","orientable.rs","popover.rs","print_operation.rs","print_operation_preview.rs","range.rs","recent_manager.rs","root.rs","scale.rs","scale_button.rs","scrollable.rs","selection_model.rs","shortcut_manager.rs","sorter.rs","style_context.rs","symbolic_paintable.rs","text_buffer.rs","text_view.rs","toggle_button.rs","tree_drag_dest.rs","tree_drag_source.rs","tree_model_filter.rs","tree_view.rs","widget.rs","window.rs"]]],["accessible.rs","actionable.rs","application.rs","assistant.rs","bitset_iter.rs","bookmark_list.rs","border.rs","builder.rs","builder_cscope.rs","builder_rust_scope.rs","builders.rs","cell_area.rs","cell_layout.rs","closure_expression.rs","color_chooser.rs","combo_box.rs","constant_expression.rs","constraint_guide.rs","constraint_layout.rs","css_location.rs","custom_filter.rs","custom_sorter.rs","dialog.rs","directory_list.rs","drawing_area.rs","drop_target.rs","editable.rs","editable_label.rs","entry.rs","entry_buffer.rs","entry_completion.rs","enums.rs","event_controller_key.rs","expression.rs","expression_watch.rs","file_chooser.rs","file_chooser_dialog.rs","flow_box.rs","font_chooser.rs","font_dialog.rs","functions.rs","gesture_stylus.rs","icon_theme.rs","im_context_simple.rs","info_bar.rs","keyval_trigger.rs","label.rs","lib.rs","list_box.rs","list_store.rs","map_list_model.rs","media_stream.rs","menu_button.rs","message_dialog.rs","mnemonic_trigger.rs","native_dialog.rs","notebook.rs","object_expression.rs","overlay.rs","pad_action_entry.rs","page_range.rs","param_spec_expression.rs","prelude.rs","print_job.rs","print_operation.rs","print_settings.rs","property_expression.rs","recent_data.rs","requisition.rs","response_type.rs","rt.rs","scale.rs","shortcut.rs","shortcut_trigger.rs","shortcuts_section.rs","signal_list_item_factory.rs","snapshot.rs","spin_button.rs","string_list.rs","text.rs","text_buffer.rs","tree_model.rs","tree_model_filter.rs","tree_path.rs","tree_row_reference.rs","tree_selection.rs","tree_sortable.rs","tree_store.rs","tree_view.rs","tree_view_column.rs","widget.rs"]],\
"gtk4_macros":["",[],["attribute_parser.rs","composite_template_derive.rs","lib.rs","template_callbacks_attribute.rs","util.rs"]],\
"gtk4_sys":["",[],["lib.rs"]]\
}');
createSourceSidebar();
